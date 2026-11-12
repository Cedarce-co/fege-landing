import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        headline="We could not find that page"
        subhead="If a link asked you to pay, do not. Go to fege.africa."
        cta="Back home"
        ctaHref="/"
        crumb="Not found"
      />
      <div className="section-pad page-width flex justify-center py-12">
        <Button href="/d/demo" variant="white" size="lg">
          Sample Deal Page
        </Button>
      </div>
    </>
  );
}
