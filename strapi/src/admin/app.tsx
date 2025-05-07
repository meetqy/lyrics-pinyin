import { useFetchClient, type StrapiApp } from "@strapi/strapi/admin";
import { Button } from "@strapi/design-system";
import { pinyin } from "pinyin-pro";
// import { useCMEditViewDataManager } from "@strapi/helper-plugin";
// import type {
//   PanelComponent,
//   PanelComponentProps,
// } from "@strapi/content-manager/strapi-admin";

const GeneratorPinyinPanel = ({
  activeTab,
  collectionType,
  document,
  documentId,
  meta,
  model,
}) => {
  const { put } = useFetchClient();

  const generator = () => {
    const { lyrics, author, name } = document;
    const py = {
      lyrics_py: pinyin(lyrics).replace(/\n\s/g, "\n"),
      author_py: pinyin(author).replace(/\n\s/g, "\n"),
      name_py: pinyin(name).replace(/\n\s/g, "\n"),
    };

    put(
      `/content-manager/collection-types/api::lyric.lyric/${documentId}`,
      py
    ).then((res) => {
      window.location.reload();
    });
  };

  return {
    title: "Generator Pinyin",
    content: <Button onClick={generator}>Generator Pinyin</Button>,
  };
};

export default {
  bootstrap(app: StrapiApp) {
    app
      .getPlugin("content-manager")
      .apis.addEditViewSidePanel((panels) => [GeneratorPinyinPanel, ...panels]);
  },
};
