import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  return (
    <section id="faq" className="py-24 bg-muted/50">
      <div className="container max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Common Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Learn more about how Lyrics Pinyin can help with your Chinese
            learning journey
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="grid gap-4 bg-background rounded-lg p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What is Lyrics Pinyin and how can it help me learn Chinese?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Lyrics Pinyin is a free platform designed to help you learn
                Chinese through music. We provide synchronized Lyrics Pinyin for
                popular Chinese songs, making it easier to understand
                pronunciation and meaning while enjoying Chinese music.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                What features are available on Lyrics Pinyin?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Synchronized Chinese characters with pinyin</li>
                  <li>English translations for better understanding</li>
                  <li>Print-friendly format for offline learning</li>
                  <li>PDF download option for your convenience</li>
                  <li>No registration required - instant access</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                How do I get started with Lyrics Pinyin?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Getting started is easy! Simply:
                <ol className="list-decimal list-inside mt-2 space-y-2">
                  <li>Browse our collection of Chinese songs</li>
                  <li>Select any song you like</li>
                  <li>View the synchronized Lyrics Pinyin</li>
                  <li>Download or print for offline learning</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Is Lyrics Pinyin really free to use?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, Lyrics Pinyin is completely free to use. We believe in
                making Chinese language learning accessible to everyone. You can
                access all features without any payment or registration
                required.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
