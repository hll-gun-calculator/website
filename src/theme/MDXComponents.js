import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import VersionListWidget from '@site/src/components/VersionListWidget';
import VersionHistoryListWidget from '@site/src/components/VersionHistoryListWidget';
import DownloadTableWidget from '@site/src/components/DownloadTableWidget';
import CalcRecommendedList from "@site/src/components/CalcRecommendedListWidget";
import MapRecommendedListWidget from "@site/src/components/MapRecommendedListWidget";

export default {
    ...MDXComponents,
    VersionListWidget,
    VersionHistoryListWidget,
    DownloadTableWidget,
    CalcRecommendedList,
    MapRecommendedListWidget,
};
