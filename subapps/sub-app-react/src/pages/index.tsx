import yayJpg from '../assets/yay.jpg';

export default function HomePage() {
    return (
        <div>
            <h2>SUB-APP-REACT</h2>
            <div>
                { new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') }
            </div>
            <p>
                <img src={ yayJpg } width="388"/>
            </p>
            <p>
                To get started, edit <code>pages/index.tsx</code> and save to reload.
            </p>
        </div>
    );
}
