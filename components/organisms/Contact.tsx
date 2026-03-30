'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      toast.error('Missing required fields', {
        description: 'Please add your name, email, and message before sending.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        subject: form.subject,
        message: form.message,
      };

      const request = fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      await toast.promise(
        (async () => {
          const res = await request;
          const data = await res.json();

          if (!res.ok || !data.success) {
            throw new Error(data.error || 'Unable to send your message right now.');
          }

          return data;
        })(),
        {
          loading: 'Sending your message...',
          success: 'Message sent successfully.',
          error: (error) =>
            error instanceof Error ? error.message : 'Unable to send your message right now.',
          description: 'We will get back to you as soon as possible.',
        }
      );

      setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.group}>
          <legend className={styles.legend}>Name</legend>
          <div className={styles.nameRow}>
            <label className={styles.field}>
              <span className={styles.label}>
                First Name <span className={styles.meta}>(Required)</span>
              </span>
              <input className={styles.input} type="text" name="firstName" required value={form.firstName} onChange={handleChange} />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>
                Last Name <span className={styles.meta}>(Required)</span>
              </span>
              <input className={styles.input} type="text" name="lastName" required value={form.lastName} onChange={handleChange} />
            </label>
          </div>
        </fieldset>

        <label className={styles.field}>
          <span className={styles.label}>
            Email <span className={styles.meta}>(Required)</span>
          </span>
          <input className={styles.input} type="email" name="email" required value={form.email} onChange={handleChange} />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Subject</span>
          <input className={styles.input} type="text" name="subject" value={form.subject} onChange={handleChange} />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>
            Message <span className={styles.meta}>(Required)</span>
          </span>
          <textarea className={styles.textarea} name="message" required value={form.message} onChange={handleChange} />
        </label>

        <button className={styles.button} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </section>
  );
}
