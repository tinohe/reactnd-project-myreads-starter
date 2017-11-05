import {Enum} from 'enumify';

class BookShelfType extends Enum {}
BookShelfType.initEnum(['currentlyReading', 'wantToRead', 'read', 'none']);
export default BookShelfType
