import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import CheckInForm from "./check-in-form";
import styles from "./event-register.module.css";

export const metadata: Metadata = {
  title: "Event check-in | Women in Tech Summit Kenya",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default function EventRegisterPage() {
  return (
    <main className={styles.stage}>
      <div className={styles.backdrop} aria-hidden="true">
        <span className={`${styles.orb} ${styles.orbPink}`} />
        <span className={`${styles.orb} ${styles.orbPurple}`} />
        <span className={`${styles.orb} ${styles.orbBlue}`} />
        <span className={styles.gridLines} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center px-4 py-8">
        <div className={`${styles.rise} mx-auto mb-5`}>
          <div className={styles.logoHalo}>
            <div className={styles.logoDisc}>
              <Image
                src="/wit_logo.png"
                alt="Women in Tech Summit"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
            </div>
          </div>
        </div>

        <p className={`${styles.rise} ${styles.delay1} ${styles.eyebrow}`}>
          27th - 28th Nov, 2026 • Nairobi, Kenya
        </p>
        <h1 className={`${styles.rise} ${styles.delay2} ${styles.headline}`}>
          You made it.
        </h1>
        <p className={`${styles.rise} ${styles.delay3} ${styles.subhead}`}>
          One step left and you're in the room.
        </p>

        <div className={`${styles.rise} ${styles.delay4} ${styles.card}`}>
          <div className={styles.cardInner}>
            <Suspense fallback={<p className="text-center">Loading...</p>}>
              <CheckInForm />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
