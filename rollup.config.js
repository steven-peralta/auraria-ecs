import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const externals = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
];

const makeExternalPredicate = externalsArr => {
    if (externalsArr.length === 0) {
        return () => false;
    }

    const externalPattern = new RegExp(`^(${externalsArr.join('|')})($|/)`);
    return id => externalPattern.test(id);
};

export default {
    input: 'src/index.js',
    external: makeExternalPredicate(externals),
    plugins: [
        babel()
    ],
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'es' },
    ]
};