import React from "react"
import ContentLoader from "react-content-loader"

const LoadingBlock = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="140" cy="139" r="140" />
        <rect x="0" y="300" rx="3" ry="3" width="283" height="26" />
        <rect x="0" y="339" rx="6" ry="6" width="280" height="75" />
        <rect x="3" y="425" rx="3" ry="3" width="73" height="20" />
        <rect x="175" y="422" rx="21" ry="21" width="105" height="38" />
    </ContentLoader>
);

export default LoadingBlock;