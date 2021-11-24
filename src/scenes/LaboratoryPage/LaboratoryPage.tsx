import cn from 'classnames';
import { Nav } from 'components/Nav';
import stylesPage from 'styles/page.module.scss';

import { LockedCard } from './components/LockedCard';
import { Pip } from './components/Pip';

const LaboratoryPage: React.FC = () => (
  <>
    <Nav />
    <main className={cn(stylesPage.container, stylesPage['container--lab'])}>
      <div className={stylesPage.callout}>
        <span className={stylesPage.callout__emoji}>💡</span>
        <p>Showcase of small examples</p>
      </div>
      <Pip />
      <LockedCard />
    </main>
  </>
);

export { LaboratoryPage };
