
const siteUrl = "http://localhost:3000/"

module.exports = {
    siteUrl,
    generateRobotsTxt : true,
    rebotsTextOptions : {
        policies : [
            {userAgent  : '*' , disallow : "/secret"},
            {userAgent  : '*' , disallow : "/"},
        ],
        additionalSiteMaps : [
            `${siteUrl}/sitemap.xml`,
            `${siteUrl}/server-sitemap.xml`
        ]
    },
    exclude : ["/secret"]
}