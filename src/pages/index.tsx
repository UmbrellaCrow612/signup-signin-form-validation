import {
  H1,
  H2,
  H3,
  H4,
  Blockquote,
  InlineCode,
  Large,
  List,
  Lead,
  Muted,
  P,
  Small,
} from "@/components/Typography";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-3">
      <H1>this is a h1</H1>
      <H2>H2</H2>
      <H3>h3</H3>
      <H4>h4</H4>
      <Blockquote> Quotes</Blockquote>
      <InlineCode> Code </InlineCode>
      <Large> Large</Large>
      <List>
        <li>item one</li>
      </List>
      <Lead>Lead</Lead>
      <Muted>Mute</Muted>
      <P>Para</P>
      <Small>Small</Small>
    </div>
  );
}
