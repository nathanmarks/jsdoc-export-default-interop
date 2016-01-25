import Test from 'blue-tape';
import Jedi from 'lib/index.js';

Test('Module', t => {

  t.ok(Jedi, 'Should exist');

  t.looseEquals(
    Jedi(),
    {},
    'Should be a function that returns the module object'
  );

  t.end();

});
