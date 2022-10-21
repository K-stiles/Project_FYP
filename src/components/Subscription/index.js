import { Container, Section } from "./subscription.styled";

export default function Subscription({ children, ...restProps }) {
   return <Section {...restProps}>{children}</Section>;
}
Subscription.Container = function SubscriptionContainer({
   children,
   ...restProps
}) {
   return <Container {...restProps}>{children}</Container>;
};
