import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type ArticleAuthorProps<
    P = {
        id?: HTMLDivElement['id'];
        className?: HTMLDivElement['className'];
        author: Author;
    },
> = P;

interface Author {
    name: string;
    role: string;
    href: string;
    imageUrl: string;
}

export const ArticleAuthor: FC<ArticleAuthorProps> = (props) => {
    return (
        <Author>
            <AuthorImage src={props.author.imageUrl} alt="" />
            <AuthorNameContainer>
                <AuthorName>
                    <a href={props.author.href}>
                        <span />
                        {props.author.name}
                    </a>
                </AuthorName>
                <AuthorRole>{props.author.role}</AuthorRole>
            </AuthorNameContainer>
        </Author>
    );
};

const Author = styled.div`
    ${tw`relative mt-8 flex items-center gap-x-4`}
`;

const AuthorImage = styled.img`
    ${tw`h-10 w-10 rounded-full bg-gray-100 border-2 border-gray-200 border-solid`}
`;

const AuthorNameContainer = styled.div`
    ${tw`text-sm leading-6`}
`;

const AuthorName = styled.p`
    ${tw`font-semibold text-gray-200`}
    > a {
        span {
            ${tw`absolute inset-0`}
        }
    }
`;

const AuthorRole = styled.p`
    ${tw`text-gray-400`}
`;

export default ArticleAuthor;
