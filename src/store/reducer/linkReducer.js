import { GET_LINKS, DELETE_LINK, ADD_LINK } from '../actions/types';
const initialState = {
  links: [
    {
      title: 'Updated1',
      url: 'http://udemy-updated.com',
      id: '6'
    },
    {
      id: '7',
      title: 'Learn MongoDb ',
      url: 'http://www.google.com'
    },
    {
      title: 'Edit GrapHQL',
      url: 'http:/www.edit-graphql.com',
      id: '8'
    },
    {
      id: '9',
      title: 'Learn Relay ',
      url: 'http://www.google.com'
    },
    {
      id: '10',
      title: 'Learn Redux ',
      url: 'http://www.google.com'
    },
    {
      title: 'Learning GraphQL with Prisma and NodeJs',
      url: 'https://bit.ly/2K5v9wT',
      id: '1533796824453'
    },
    {
      title: 'New Link',
      url:
        'https://www.udemy.com/build-and-secure-restful-apis-with-nodejs-and-mongodb/?couponCode=CUP_19',
      id: '1533796968221'
    },
    {
      title: 'Learn React',
      url: 'https://bit.ly/2u6wrm8',
      id: '1533797008788'
    },
    {
      title: 'Learn GraphQL with NodeJs',
      url: 'https://bit.ly/2mcAKIc',
      id: '1533799268580'
    },
    {
      title: 'Learn NodeJs',
      url: 'https://bit.ly/2K5v9wT',
      id: '1533801575947'
    },
    {
      title: 'GraphQL with NodeJs: From Beginner to Advanced Concepts',
      url: 'https://bit.ly/2K5v9wT',
      id: '1533815082983'
    },
    {
      title: 'Deploy Nodejs, Express Application to Heroku',
      url:
        'https://www.udemy.com/build-and-secure-restful-apis-with-nodejs-and-mongodb/?couponCode=CUP_19',
      id: '1533815140465'
    }
  ]
};
export const linkReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LINKS:
      //2.
      return {
        ...state
      };
    case DELETE_LINK:
      return {
        ...state,
        links: state.links.filter(link => link.id !== action.payload)
      };
    case ADD_LINK:
      return {
        ...state,
        links: [action.payload, ...state.links]
      };
    default:
      return state;
  }
};
