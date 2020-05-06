// 3p
import { Class } from '@foal/core';
import { getMongoRepository, ObjectID } from 'typeorm';

export function fetchMongoDBUser(
  userEntityClass: Class<{ id: ObjectID }|{ _id: ObjectID }>
): (id: number|string) => Promise<any> {
  return (id: number|string) => getMongoRepository(userEntityClass).findOne(id);
}
