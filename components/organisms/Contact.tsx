import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <p className={styles.kicker}>Contact</p>
        <h1 className={styles.title}>
          HAVE AN
          <br />
          IDEA? LET&apos;S
          <br />
          TALK.
        </h1>
      </div>

      <form className={styles.form}>
        <fieldset className={styles.group}>
          <legend className={styles.legend}>Name</legend>
          <div className={styles.nameRow}>
            <label className={styles.field}>
              <span className={styles.label}>
                First Name <span className={styles.meta}>(Required)</span>
              </span>
              <input className={styles.input} type="text" name="firstName" required />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>
                Last Name <span className={styles.meta}>(Required)</span>
              </span>
              <input className={styles.input} type="text" name="lastName" required />
            </label>
          </div>
        </fieldset>

        <label className={styles.field}>
          <span className={styles.label}>
            Email <span className={styles.meta}>(Required)</span>
          </span>
          <input className={styles.input} type="email" name="email" required />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Subject</span>
          <input className={styles.input} type="text" name="subject" />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>
            Message <span className={styles.meta}>(Required)</span>
          </span>
          <textarea className={styles.textarea} name="message" required />
        </label>

        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
