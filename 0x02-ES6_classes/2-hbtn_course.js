/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new {@link HolbertonCourse}.
   *
   * @param {string} name - The name of the course.
   * @param {number} length - How long the course is (in months).
   * @param {string[]} students - The names of students in the course.
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Gets the name of this course.
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of this course.
   * @param {string} value - The new name for the course.
   * @throws {TypeError} If the provided value is not a string.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of this course (in months).
   * @returns {number} The length of the course in months.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of this course (in months).
   * @param {number} value - The new length for the course.
   * @throws {TypeError} If the provided value is not a number.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the names of students in this course.
   * @returns {string[]} The names of students in the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the names of students in this course.
   * @param {string[]} value - The new array of student names.
   * @throws {TypeError} If the provided value is not an array of strings.
   */
  set students(value) {
    if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}

