import header  from './views/header';
import content from './views/content';
import footer  from './views/footer';

console.info("Init App");

header();
setInterval(content, 1000);
footer();

if (module.hot) {
  module.hot.accept();
}
