import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {type: 'autogenerated', dirName: '.'},
        {
            type: 'html',
            value: '<hr/>',
        },
        {
            type: 'html',
            value: '<p class="pl-3 d-block opacity-25 text-right" style="font-size: 12px;">©HLL Gun Calc</p>'
        },

    ],
};

export default sidebars;
