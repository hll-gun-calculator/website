import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import VersionListWidget from '@site/src/components/VersionListWidget';
import VersionHistoryListWidget from '@site/src/components/VersionHistoryListWidget';

export default {
    ...MDXComponents,
    VersionListWidget,
    VersionHistoryListWidget,
};
