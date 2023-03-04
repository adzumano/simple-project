import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { DefinePlugin, ProgressPlugin, type WebpackPluginInstance } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { type BuildOptions } from './types/config'

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new DefinePlugin({
            IS_DEV: JSON.stringify(true)
        }),
        new ReactRefreshPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ]
}
