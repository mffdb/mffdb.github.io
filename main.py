import os
from datetime import datetime
from pytz import timezone
#from crawling_yes24 import parsing_beautifulsoup, extract_book_data	# crawling_yes24.py에서 parsing_beautifulsoup, extract_book_data 함수 불러오기
import requests
from bs4 import BeautifulSoup
#from github_utils import get_github_repo, upload_github_issue	# github_utils.py에서 get_github_repo, upload_github_issue 함수 불러오기
from github import Github

if __name__ == "__main__":
    access_token = os.environ['MY_GITHUB_TOKEN']
    repository_name = "mffdb.github.io" # 내 저장소 이름 필수로 바꿔야함 

    seoul_timezone = timezone('Asia/Seoul')
    today = datetime.now(seoul_timezone)
    today_date = today.strftime("%Y년 %m월 %d일")

    yes24_it_new_product_url = "http://www.yes24.com/24/Category/NewProductList/001001003?sumGb=01"
    
    #---- 추가 ----#
    kleague_club_ranking_url = "https://kleague.com/api/clubRank.do"

#    soup = parsing_beautifulsoup(yes24_it_new_product_url)

    data = requests.get(yes24_it_new_product_url)
    html = data.text
    soup = BeautifulSoup(html, 'html.parser')
    
    #---- 추가 ----#
    data1 = requests.get(kleague_club_ranking_url)
    html1 = data1.text
    soup1 = BeautifulSoup(html, 'html.parser')
    #---- 추가 ----#

#    upload_contents = extract_book_data(soup)

    upload_contents = ''
    new_books = soup.select(".goodsTxtInfo")	# 새 함수 선언 예스24 사이트 goodsTxtInfo 클래스 안에 내용
    url_prefix = "http://www.yes24.com"

    for new_book in new_books:
        book_name = new_book.select("a")[0].text
        url_suffix = new_book.select("a")[1].attrs['href']
        url = url_prefix + url_suffix
        price = new_book.select(".priceB")[0].text

        content = f"<a href={url}>" + book_name + "</a>" + ", " + price + "<br/>\n"
        upload_contents += content

    #---- 추가 ----#
    api_club_ranking = []
    new_club_ranking = soup1.select("data")

    for club_ranking in new_club_ranking:
        club_leagueId = club_ranking.select("leagueId")[0].text
        club_teamId = club_ranking.select("teamId")[0].text
        club_teamName = club_ranking.select("teamName")[0].text
        club_rank = club_ranking.select("rank")[0].text
        club_gainPoint = club_ranking.select("gainPoint")[0].text
        club_winCnt = club_ranking.select("winCnt")[0].text
        club_tieCnt = club_ranking.select("tieCnt")[0].text
        club_lossCnt = club_ranking.select("lossCnt")[0].text
        club_gapCnt = club_ranking.select("gapCnt")[0].text
        club_gainGoal = club_ranking.select("gainGoal")[0].text
        club_lossGoal = club_ranking.select("ossGoal")[0].text
        club_gameCount = club_ranking.select("gameCount")[0].text

        content1 = f"data: [" + club_leagueId + ", " + club_teamId + ", " + club_teamName + ", " + club_rank + ", " + club_gainPoint + ", " + club_winCnt + ", " + club_tieCnt + ", " + club_lossCnt + ", " + club_gapCnt + ", " + club_gainGoal + ", " + club_lossGoal + ", " + club_gameCount + "]"
        api_club_ranking += content1
    #---- 추가 ----#
        

#    repo = get_github_repo(access_token, repository_name)

    g = Github(access_token)
    repo = g.get_user().get_repo(repository_name)

    issue_title = f"YES24 IT 신간 도서 알림({today_date})"

#    upload_github_issue(repo, issue_title, upload_contents)

    repo.create_issue(title=issue_title, body=upload_contents)
    repo.create_file("teamRank.jsonp", "commit message", upload_contents)

    #---- 추가 ----#
    repo.create_file("clubRank.jsonp", "commit message", api_club_ranking)
    
    print("Upload Github Issue Success!")
