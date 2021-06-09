/**
 * SinglePage component for a single page site, with multiple sections.
 */

import React from 'react';

import TopSection from './TopSection';
import Section from '../../components/Section'
import styles from './styles';

export default function SinglePage() {
  return (
    <div style={styles.sections}>
      <TopSection />
      <Section style={styles.sectionEven}>
        
      </Section>
      <Section style={styles.sectionOdd}>
        
      </Section>
      <Section style={styles.sectionEven}>
        
      </Section>
      <Section style={styles.sectionOdd}>
        
      </Section>
    </div>
  );
}