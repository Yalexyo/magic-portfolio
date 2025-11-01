import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, person, teamGallery } from "@/resources";
import { Flex, Meta, Schema } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: teamGallery.title,
    description: teamGallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(teamGallery.title)}`,
    path: teamGallery.path,
  });
}

export default function TeamGallery() {
  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={teamGallery.title}
        description={teamGallery.description}
        path={teamGallery.path}
        image={`/api/og/generate?title=${encodeURIComponent(teamGallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${teamGallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <GalleryView />
    </Flex>
  );
}
