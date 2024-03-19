import { Dispatch, FC, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@state/store';
import PageModal from '@components/Base/Modal/Modal';
import { OverridableProps } from '@components/Overridable';

type ProjectModalProps<
    P = OverridableProps & {
        openModal: boolean;
        setOpenModal: Dispatch<SetStateAction<boolean>>;
    },
> = P;
export const ProjectModal: FC<ProjectModalProps> = (props) => {
    const project = useSelector((state: RootState) => state.project.current);
    return (
        <PageModal
            className={'project-modal'}
            openModal={props.openModal}
            setOpenModal={props.setOpenModal}
        >
            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                <img
                    src={project.image_url}
                    alt={project.title}
                    className="object-cover object-center"
                />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
                <h2 className="text-xl font-medium text-gray-900 sm:pr-12">
                    {project.title}
                </h2>
                <section aria-labelledby="information-heading" className="mt-1">
                    {/*<h3 id="information-heading" className="sr-only">*/}
                    {/*    Product information*/}
                    {/*</h3>*/}

                    <p className="font-medium text-gray-900">
                        {project.description}
                    </p>
                </section>
            </div>
        </PageModal>
    );
};
