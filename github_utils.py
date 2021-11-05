from github import Github

def get_github_repo(access_token, repository_name):
    """
    github repo object를 얻는 함수
    :param access_token: Github access token
    :param repository_name: repo 이름
    :return: repo object
    """
    g = Github(access_token)
    repo = g.get_user().get_repo(repository_name)
    return repo

def upload_github_issue(repo, title, body):
    """
    해당 repo에 title 이름으로 issue를 생성하고, 내용을 body로 채우는 함수
    :param repo: repo 이름
    :param title: issue title
    :param body: issue body
    :return: None
    """
    repo.create_issue(title=title, body=body)
#    repo.create_file("rank.jsonp", "commit message", body)

def delete_github_issue(repo):
    issues = repo.get_issues(state='open')
    for issue in issues:
        if "YES24 IT 신간 도서 알림" in issue.title:
            issue.edit(state='closed')
            print(issue.title)
