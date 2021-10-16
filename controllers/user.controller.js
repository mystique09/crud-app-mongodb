const mockUsers = require('../mockDB');
const User = require('../models/user.model.js');

module.exports = {
  
  /*
  * Fetch all user in db
  @return {Array}
  */
  async getUsers(req, res){
    const users = await User.find().select('_id username role');
    return res.status(200).json({ users });
  },
  
  /*
  * Fetch user by its id.
  @return {User}
  */
  async getUser(req, res){
    
    /*
    User ID parameter.
    * @types {string};
    */
    const {id} = req.body;
    const filteredUser = mockUsers.filter(user => user.id === id);
    return res.status(200).json({ user: filteredUser });
  },
  
  /*
  * Create new user.
  @return {Object}
  */
  async addUser(req, res){
    const {username, password, email} = req.body;
    
    if(!username || !password || !email){
      return res.status(401).json({ message: "ERROR: Missing field(s) (username, password, email)"});
    }
    
    return res.status(200).json({message: 'Account successfully created!'});
  },
  
  /**/
  async updateUser(req, res){
    
    const {newUsername, id} = req.body;
    
    if(!newUsername || !id){
      return res.status(401).json({ message: "ERROR: Missing fields (id, newUsername)"});
    }
    
    return res.status(200).json({ message: "User updated!"});
  },
  
  /**/
  async deleteUser(req, res){
    return res.status(200).json({ message: "Account successfully deleted!" });
  }
};