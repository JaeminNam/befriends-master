export const USER_FRAGMENT = `
    id
    nickName
    avatar
`;

export const COMMENT_FRAGMENT = `
    id
    text
`;

export const FILE_FRAGMENT = `
    id
    url
`;


export const FULL_POST_FRAGMENT = `
  fragment PostParts on Post {
    id
    location
    contents
    comments {
      ${COMMENT_FRAGMENT}
    }
    user {
      ${USER_FRAGMENT}
    }
    files {
      ${FILE_FRAGMENT}
    }
  }
`;


export const MESSAGE_FRAGMENT = `
    id
    text
    to {
        ${USER_FRAGMENT}
    }
    from {
        ${USER_FRAGMENT}
    }
`;
export const ROOM_FRAGMENT = `
    fragment RoomParts on Room {
        id
        participants {
            ${USER_FRAGMENT}
        }
        messages { 
          ${MESSAGE_FRAGMENT}
        }
    }
`;
