import importDir from 'import-dir';

const routerConfigs = [{ folder: 'base', prefix: '' }, { folder: 'api', prefix: '/api' }];

export default function routes(app) {
  routerConfigs.reduce((prev, curr) => {
    const routes = importDir('./' + curr.folder);
    Object.keys(routes).map(name => routes[name](app, curr.prefix));
  }, []);
}

