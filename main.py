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
    
    url = 'https://kleague.com/api/clubRank.do'

#    soup = parsing_beautifulsoup(yes24_it_new_product_url)

    data = requests.get(yes24_it_new_product_url)
    html = data.text
    soup = BeautifulSoup(html, 'html.parser')

    req1 = requests.get(url)
    html1 = req.content
    soup1 = BeautifulSoup(html, 'html.parser')

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

    rank1 = []
    rank2 = []
    rank1 = rank_json["data"]["league1"]
    rank2 = rank_json["data"]["league2"]
    rank_zip = rank1 + rank2

    rank_json=json.loads(soup.text)
    league_ranking = json.dumps(rank_zip, ensure_ascii=False, indent="\t")
    
#    repo = get_github_repo(access_token, repository_name)

    g = Github(access_token)
    repo = g.get_user().get_repo(repository_name)

    issue_title = f"YES24 IT 신간 도서 알림({today_date})"
    
    repo1 = g.get_user().get_repo(repository_name)
    
    issue_title1 = f"K리그 순위({today_date})"

    
#    upload_github_issue(repo, issue_title, upload_contents)

    repo.create_issue(title=issue_title, body=upload_contents)
       
    repo1.create_issue(title=issue_title, body=league_ranking)
    repo1.create_file("rank1.json", "commit message", league_ranking)
       
    print("Upload Github Issue Success!")
