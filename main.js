//objeto links
const links = {
  github: 'wagnerschwarz',
  youtube: 'yteste',
  twitter: 'tteste',
  facebook: 'fteste',
  instagram: 'iteste'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    let social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userIMG.src = data.avatar_url
    })
}

getGithubProfileInfos()
