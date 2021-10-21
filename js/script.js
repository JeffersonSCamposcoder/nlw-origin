const LinkisSocialMedia = {
    github: 'JeffersonSCamposcoder',
    linkedin: 'in/yasmin-horbach-a5517419b/',
    instagram: 'yasminhorbach/',
    facebook: 'yasmin.horbach'
}

function changeSocialMediaLinks() {}

for (let li of idSocialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinkisSocialMedia[social]}`

    //alert(li.children[0].href)
}

changeSocialMediaLinks()
