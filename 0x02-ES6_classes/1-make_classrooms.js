import ClassRoom from './0-classroom';

/**
 * Initializes an array of {@link ClassRoom}s with specified sizes.
 * 
 * @returns {ClassRoom[]} An array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  return [19, 20, 34].map(size => new ClassRoom(size));
}

