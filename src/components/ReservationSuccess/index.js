import {
   BackBtn,
   BoldText,
   CenterSection,
   Container,
   Content,
   EditIcon,
   HeaderSection,
   MainHeader,
   MediumText,
   Section,
   SuccessImg,
} from "./success.styled";

export default function Success({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}
Success.Container = function SuccessContainer({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
};

// -----------
Success.MainHeader = function SuccessMainHeader({ children, ...restProps }) {
   return <MainHeader {...restProps}>{children}</MainHeader>;
};

Success.HeaderSection = function SuccessHeaderSection({
   children,
   ...restProps
}) {
   return <HeaderSection {...restProps}>{children}</HeaderSection>;
};
Success.EditIcon = function SuccessEditIcon({ ...restProps }) {
   return <EditIcon {...restProps} />;
};
Success.SuccessImg = function SuccessSuccessImg({ ...restProps }) {
   return <SuccessImg {...restProps} />;
};
Success.CenterSection = function SuccessCenterSection({
   children,
   ...restProps
}) {
   return <CenterSection {...restProps}>{children}</CenterSection>;
};
Success.MediumText = function SuccessMediumText({ children, ...restProps }) {
   return <MediumText {...restProps}>{children}</MediumText>;
};
Success.BoldText = function SuccessBoldText({ children, ...restProps }) {
   return <BoldText {...restProps}>{children}</BoldText>;
};
Success.Content = function SuccessContent({ children, ...restProps }) {
   return <Content {...restProps}>{children}</Content>;
};
Success.BackBtn = function SuccessBackBtn({ children, ...restProps }) {
   return <BackBtn {...restProps}>{children}</BackBtn>;
};
