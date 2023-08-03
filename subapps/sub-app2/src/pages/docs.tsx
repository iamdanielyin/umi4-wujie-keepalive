const DocsPage = () => {
    return (
        <div>
            <h2>APP2-DOCS</h2>
            <div>
                { new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') }
            </div>
            <p>This is umi docs.</p>
        </div>
    );
};

export default DocsPage;
