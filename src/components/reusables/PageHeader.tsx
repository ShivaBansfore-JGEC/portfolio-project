
interface pageHeaderProps {
    title: string,
    subTitle: string,
    classSuffix: string
}

const PageHeader = (props: pageHeaderProps) => {
    const { title, subTitle, classSuffix } = props || {};
    return (
        <div>
            <p className={`page-title-${classSuffix} text-align-center`}>{title}</p>
            <p className={`page-sub-title-${classSuffix} text-align-center`}>{subTitle}</p>
        </div>
    )
}

export default PageHeader;