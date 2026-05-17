interface Props {
  schema: object | object[];
}

export default function JsonLd({ schema }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
