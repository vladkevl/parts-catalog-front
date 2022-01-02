import {MainCard, SkeletonMainCardImage} from "../styles/style";
import React from "react";

const PartsSkeleton = () => {
    return (
        <>
            <MainCard>
                <SkeletonMainCardImage></SkeletonMainCardImage>
            </MainCard>
            <MainCard>
                <SkeletonMainCardImage></SkeletonMainCardImage>
            </MainCard>
        </>
    )
}

export default PartsSkeleton