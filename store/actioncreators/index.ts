import * as todos from './todosactions'
import *as auth from './auth';

export const actioncreators={
            ...todos,
            ...auth
}