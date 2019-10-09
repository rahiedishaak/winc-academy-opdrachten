const functions = {
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Brad' };
        user['lastName'] = 'Traversy';
        return user;
    }
  };
  
  module.exports = functions;