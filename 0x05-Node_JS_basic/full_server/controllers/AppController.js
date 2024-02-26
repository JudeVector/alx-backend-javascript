/**
 * Contains the miscellaneous route handlers.
 * @author Jude Ndubuisi <https://github.com/judevector>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
