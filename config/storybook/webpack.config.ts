import path from 'path'
import { type Configuration, type RuleSetRule } from 'webpack'

import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'
import { type BuildPaths } from '../build/types/config'

export default ({ config }: { config: Configuration }): Configuration => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    // eslint-disable-next-line
    if (config.module?.rules) {
        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            // eslint-disable-next-line
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i }
            }
            return rule
        })
    }
    config.module?.rules?.push(buildSvgLoader())
    config.module?.rules?.push(buildCssLoader(true))
    return config
}
