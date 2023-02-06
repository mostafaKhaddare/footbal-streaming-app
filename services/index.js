import { GraphQLClient , gql } from "graphql-request"
const graphqlcms = new GraphQLClient('https://api-us-west-2.hygraph.com/v2/clcnpvk6u0cuc01umfkziashj/master')


// GET ALL MATCHES
export const getMatches = async () =>{
  const QUERY = gql`
  query Matches() {
    matches(where: {tomorrow_not: true} , orderBy:finish_ASC) {
      createdAt
      id
      publishedAt
      teamOne
      title
      updatedAt
      finish
      league
      linkOne
      linkTwo
      resault
      slug
      start
      teamTwo
      time
      tomorrow
      teamOneImg {
        url
      }
      teamTwoImg {
        url
      }
    }
  }
  `
    const resault = await graphqlcms.request(QUERY)
    return resault.matches
}

// YESTERDAY MATCHES
export const getYesterdayMatches = async () => {
  const QUERY = gql`
  query MyQuery {
    matches(where: {start: true, AND: {finish: true}}) {
      createdAt
        id
        publishedAt
        teamOne
        title
        updatedAt
        finish
        league
        linkOne
        linkTwo
        resault
        slug
        start
        teamTwo
        time
        teamOneImg {
          url
          id
        }
        teamTwoImg {
          url
          id
        }
    }
  }
  `
    const resault = await graphqlcms.request(QUERY)
    return resault.matches
}


// TOMORROW MATCHES
export const getTomorrowMatches = async()=>{
  const QUERY = gql`
  query MyQuery {
    matches(where: {tomorrow: true}) {
      id
      league
      linkOne
      slug
      start
      teamOne
      teamTwo
      time
      title
      finish
      updatedAt
      tomorrow
      teamOneImg {
        url
      }
      teamTwoImg {
        url
      }
    }
  }
  `
  const resault = await graphqlcms.request(QUERY)
    return resault.matches
}


// YESTERDAY RELATED MATCHES
export const getRelatedMatches = async(slug)=>{
  const QUERY = gql`
  query GetPostDetails($slug : String! ){
    matches(where : {slug_not : $slug , tomorrow : false } ,  orderBy:finish_ASC) {
        id
        publishedAt
        teamOne
        title
        updatedAt
        finish
        league
        linkOne
        linkTwo
        resault
        slug
        start
        teamTwo
        time
        teamOneImg {
          url
        }
        teamTwoImg {
          url
        }
    }
  }
    
  `
  const resault = await graphqlcms.request(QUERY , {slug})
    return resault.matches
}


// DETAILD MATCH 
export const getPostDetails = async (slug) =>{
  const QUERY = gql`
    query GetPostDetails($slug : String!){
      match(where : {slug : $slug}) {
        createdAt
        id
        publishedAt
        teamOne
        title
        updatedAt
        finish
        league
        linkOne
        linkTwo
        resault
        slug
        start
        teamTwo
        time
        tomorrow
        teamOneImg {
          url
          id
        }
        teamTwoImg {
          url
          id
        }
      }
    }
  `
    const resault = await graphqlcms.request(QUERY , {slug})
    return resault.match
}

// SEND CONTACT INFO 
export const sendContactForm = async (data)=>{
  fetch("/api/contact" , {
    method : "POST",
    body : JSON.stringify(data),
    headers : {
      'Content-Type' : "application/json",
      Accept : "application/json"
    }
  }).then((res) =>{
    if(!res.ok) throw new Error("فشل في إرسال الرسالة");
    return res.json()
  })
}

