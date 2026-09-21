import alluArjunAsset from '@/assets/hero-collage/AlluArjun.webp.asset.json';
import hanumanMakingAsset from '@/assets/hero-collage/Hanuman_Making.webp.asset.json';
import editingAsset from '@/assets/hero-collage/IMG_5522_Original.jpg.asset.json';
import setReviewAsset from '@/assets/hero-collage/IMG_5842_Original.jpg.asset.json';
import nightEditAsset from '@/assets/hero-collage/IMG_7048.webp.asset.json';
import karthikAsset from '@/assets/hero-collage/Karthik_Prashanth_Varma_Nitayamenon.webp.asset.json';
import maniSharmaAsset from '@/assets/hero-collage/ManiSharma_Garu.webp.asset.json';
import sandeepAsset from '@/assets/hero-collage/Sandeep_Madhav.jpg.asset.json';
import sudeerAsset from '@/assets/hero-collage/Sudeer_YashMaster.webp.asset.json';
import suhashAsset from '@/assets/hero-collage/Suhash_BTS.webp.asset.json';
import maheshBtsAsset from '@/assets/hero-collage/Mahesh_BTS.webp.asset.json';
import maheshImagesAsset from '@/assets/hero-collage/Mahesh_Images.jpg.asset.json';
import maheshMaking2Asset from '@/assets/hero-collage/Mahesh_Making_2.webp.asset.json';
import maheshMakingAsset from '@/assets/hero-collage/MaheshMaking.webp.asset.json';
import manisharmaAsset from '@/assets/hero-collage/Manisharma.jpg.asset.json';

type GalleryImage = {
  src: string;
  alt: string;
  size: 'small' | 'medium' | 'large';
};

const lanes: GalleryImage[][] = [
  [
    { src: alluArjunAsset.url, alt: 'CineQuick production behind the scenes', size: 'large' },
    { src: maheshMaking2Asset.url, alt: 'CineQuick filming on set', size: 'small' },
    { src: maniSharmaAsset.url, alt: 'CineQuick creators collaborating on set', size: 'medium' },
    { src: setReviewAsset.url, alt: 'CineQuick team reviewing a shot', size: 'small' },
    { src: sudeerAsset.url, alt: 'CineQuick creators after a production', size: 'medium' },
  ],
  [
    { src: hanumanMakingAsset.url, alt: 'Cinematic camera team at work', size: 'medium' },
    { src: sandeepAsset.url, alt: 'Production crew preparing a scene', size: 'large' },
    { src: maheshBtsAsset.url, alt: 'Behind-the-scenes CineQuick production', size: 'small' },
    { src: editingAsset.url, alt: 'CineQuick team creating content', size: 'medium' },
    { src: karthikAsset.url, alt: 'CineQuick directing talent on set', size: 'large' },
  ],
  [
    { src: karthikAsset.url, alt: 'CineQuick directing talent on set', size: 'small' },
    { src: nightEditAsset.url, alt: 'Professional cinema camera on location', size: 'large' },
    { src: maheshImagesAsset.url, alt: 'Portrait from a CineQuick production', size: 'medium' },
    { src: suhashAsset.url, alt: 'CineQuick crew preparing a shot', size: 'small' },
    { src: alluArjunAsset.url, alt: 'CineQuick filming a real production', size: 'large' },
  ],
  [
    { src: maniSharmaAsset.url, alt: 'CineQuick production with Mani Sharma', size: 'large' },
    { src: sudeerAsset.url, alt: 'CineQuick creators after a production', size: 'medium' },
    { src: maheshMakingAsset.url, alt: 'CineQuick camera crew filming', size: 'small' },
    { src: maheshBtsAsset.url, alt: 'Real CineQuick shoot in progress', size: 'medium' },
    { src: hanumanMakingAsset.url, alt: 'CineQuick crew capturing a scene', size: 'large' },
  ],
  [
    { src: suhashAsset.url, alt: 'CineQuick team working behind the scenes', size: 'medium' },
    { src: editingAsset.url, alt: 'CineQuick production in progress', size: 'large' },
    { src: manisharmaAsset.url, alt: 'CineQuick on set with Mani Sharma', size: 'small' },
    { src: maheshMaking2Asset.url, alt: 'CineQuick filming with professional equipment', size: 'medium' },
    { src: setReviewAsset.url, alt: 'CineQuick reviewing footage on set', size: 'large' },
  ],
];

const FlowGroup = ({ images, duplicate = false }: { images: GalleryImage[]; duplicate?: boolean }) => (
  <div className="hero-flow-group" aria-hidden={duplicate || undefined}>
    {images.map((image, index) => (
      <figure
        key={`${image.src}-${index}`}
        className={`hero-flow-frame hero-flow-frame--${image.size}`}
      >
        <img
          src={image.src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-xl"
          loading="lazy"
        />
        <img
          src={image.src}
          alt={duplicate ? '' : image.alt}
          className="relative h-full w-full object-contain"
          loading={duplicate || index > 1 ? 'lazy' : 'eager'}
          fetchPriority={!duplicate && index === 0 ? 'high' : 'auto'}
        />
      </figure>
    ))}
  </div>
);

const CinematicHero = () => (
  <section
    id="home"
    aria-labelledby="hero-title"
    className="relative min-h-[100svh] overflow-hidden bg-background grain-overlay"
  >
    <div aria-hidden className="absolute inset-0 overflow-hidden pt-20">
      {lanes.map((images, index) => (
        <div className={`hero-flow-lane hero-flow-lane--${index + 1}`} key={`lane-${index + 1}`}>
          <div className="hero-flow-track">
            <FlowGroup images={images} />
            <FlowGroup images={images} duplicate />
          </div>
        </div>
      ))}
    </div>

    <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-background/10 via-background/45 to-background/10" />
    <div aria-hidden className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/80 to-transparent" />
    <div aria-hidden className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/70 to-transparent" />

    <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-5 pb-10 pt-24 text-center sm:px-8">
      <h1
        id="hero-title"
        className="hero-title-lockup animate-fade-in text-foreground"
      >
        <span className="hero-title-primary">INDIA&apos;S</span>
        <span className="hero-title-secondary">FASTEST CONTENT</span>
        <span className="hero-title-secondary">PRODUCTION TEAM</span>
      </h1>
    </div>
  </section>
);

export default CinematicHero;