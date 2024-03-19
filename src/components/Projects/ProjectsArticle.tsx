import styled from 'styled-components';
import tw from 'twin.macro';
import React, { FC, useState } from 'react';
import { Project } from '@definitions/johnny/Projects';
import { useDispatch } from 'react-redux';
import { setCurrentProject } from '@state/slices';
import { useNavigate } from 'react-router';
import classNames from 'classnames';

type ProjectsArticleProps<
    P = {
        id?: HTMLDivElement['id'];
        className?: HTMLDivElement['className'];
        project: Project;
        //setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    },
> = P;

export const ProjectsArticle: FC<ProjectsArticleProps> = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [readMore, setReadMore] = useState<boolean>(false);

    const handleArticleClick = (location: string) => {
        dispatch(setCurrentProject(props.project));
        navigate(location);
        // props.setOpenModal(true);
    };

    const handleReadMore = () => {
        setReadMore(!readMore);
    };

    return (
        <Article key={props.project.id} id={`article-${props.project.id}`}>
            <ArticleImage id={`article-image-container-${props.project.id}`}>
                <img src={props.project.image_url} alt="" />
                <div />
            </ArticleImage>
            <ArticleContent id={`article-container-${props.project.id}`}>
                <ArticleMetaContainer id={`article-meta-${props.project.id}`}>
                    <ArticleDate dateTime={props.project.datetime}>
                        {props.project.date}
                    </ArticleDate>
                    <ArticleCategory href={props.project.category.href}>
                        {props.project.category.title}
                    </ArticleCategory>
                </ArticleMetaContainer>
                <ArticleData id={`article-data-${props.project.id}`}>
                    <ArticleTitle>
                        <button
                            onClick={() =>
                                handleArticleClick(props.project.location)
                            }
                        >
                            <span />
                            {props.project.title}
                        </button>
                    </ArticleTitle>
                    <ArticleDescription
                        className={readMore ? '' : 'line-clamp-3'}
                    >
                        {props.project.description.map((description, index) => (
                            <p key={index} className={'pb-4'}>
                                {description}
                            </p>
                        ))}
                    </ArticleDescription>
                </ArticleData>
                <button
                    className={classNames('text-sm text-gray-500')}
                    onClick={handleReadMore}
                >
                    {!readMore ? 'Read more...' : 'less'}
                </button>
            </ArticleContent>
        </Article>
    );
};

const Article = styled.article`
    ${tw`flex flex-col items-start justify-start`}
`;

const ArticleImage = styled.div`
    ${tw`relative w-full`}
    > img {
        ${tw`aspect-[16/9] p-2 w-full bg-gray-500 object-contain sm:aspect-[2/1] lg:aspect-[3/2]`}
    }

    > div {
        ${tw`absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10`}
    }
`;

const ArticleContent = styled.div`
    ${tw`lg:max-w-xl bg-gray-200 p-4`}
`;

const ArticleMetaContainer = styled.div`
    ${tw`flex items-center gap-x-4 text-xs`}
`;

const ArticleDate = styled.time`
    ${tw`text-gray-400`}
`;

const ArticleCategory = styled.a`
    ${tw`relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-900 hover:bg-gray-500`}
`;

const ArticleData = styled.div`
    ${tw`relative`}
`;

const ArticleTitle = styled.h3`
    ${tw`mt-3 text-xl font-semibold leading-6 text-gray-700 group-hover:text-gray-600`}
    > a {
        span {
            ${tw`absolute inset-0`}
        }
    }
`;

const ArticleDescription = styled.div`
    ${tw`mt-5 text-base leading-6 text-gray-700`}
`;

export default ProjectsArticle;
