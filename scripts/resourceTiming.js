performance.getEntriesByType("resource").map(x => ({
    name: x.name,
    dnsLookup: x.domainLookupEnd - x.domainLookupStart,
    initialConnection: x.connectEnd - x.connectStart,
    waiting: x.responseStart - x.requestStart,
    contentDownload: x.responseEnd - x.responseStart
})).forEach(entry => console.table(entry));