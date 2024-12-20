import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView, Platform, StyleSheet, Image, View } from 'react-native';
import * as React from "react";
import { Avatar } from "@rneui/base";
import { Text, Card, Button, Icon } from '@rneui/themed';

const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  background: '#F8F9FA',
  surface: '#FFFFFF',
  text: {
    primary: '#212529',
    secondary: '#6C757D',
    tertiary: '#495057'
  },
  border: '#E9ECEF',
  shadow: '#000000'
};

const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
};

const BORDER_RADIUS = {
  sm: 8,
  md: 16,
  lg: 24
};

// Enhanced shadow utility
const createShadow = (elevation = 1) => Platform.select({
  ios: {
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: elevation },
    shadowOpacity: 0.1,
    shadowRadius: elevation * 2,
  },
  android: {
    elevation: elevation * 2,
  },
});

const ProfileAvatar = () => (
  <Avatar
    containerStyle={[styles.avatarContainer, createShadow(2)]}
    icon={{ name: 'user', type: 'font-awesome' }}
    rounded
    size="xlarge"
    source={{ uri: "/api/placeholder/150/150" }}
    title="P"
  />
);

const ScenarioCard = ({ title, description, imageUrl }) => (
  <View style={[styles.scenarioCard, createShadow(2)]}>
    <Image
      style={styles.scenarioImage}
      resizeMode="cover"
      source={{ uri: imageUrl }}
    />
    <View style={styles.scenarioContent}>
      <Text style={styles.scenarioTitle}>{title}</Text>
      <Text style={styles.scenarioDescription}>{description}</Text>
    </View>
  </View>
);

const RecentChatCard = ({ name, lastMessage, imageUrl }) => (
  <Card containerStyle={[styles.chatCard, createShadow(2)]}>
    <View style={styles.chatHeader}>
      <Image
        style={styles.chatAvatar}
        source={{ uri: imageUrl }}
      />
      <View style={styles.chatInfo}>
        <Text style={styles.chatName}>{name}</Text>
        <Text style={styles.chatMessage} numberOfLines={2}>{lastMessage}</Text>
      </View>
      <Icon
        name="chevron-right"
        type="font-awesome"
        size={16}
        color={COLORS.text.secondary}
        containerStyle={styles.chatArrow}
      />
    </View>
  </Card>
);

const CategoryCard = ({ icon, name }) => (
  <View style={[styles.categoryCard, createShadow(1)]}>
    <View style={styles.categoryIconContainer}>
      <Icon
        name={icon}
        type="font-awesome"
        size={24}
        color={COLORS.text.tertiary}
      />
    </View>
    <Text style={styles.categoryTitle}>{name}</Text>
  </View>
);


export default function HomeScreen() {
  const scenarios = [
    {
      title: "Missing Loved One",
      description: "Assist callers in reporting and searching for a missing family member or friend",
      imageUrl: "/api/placeholder/400/200"
    },
    {
      title: "Heart Attack Response",
      description: "Guide a caller through providing immediate aid to someone experiencing a heart attack",
      imageUrl: "/api/placeholder/400/200"
    },
    {
      title: "Severe Weather Evacuation",
      description: "Help callers navigate safety procedures during hurricanes, tornadoes, or floods",
      imageUrl: "/api/placeholder/400/200"
    },
    {
      title: "House Fire Emergency",
      description: "Provide instructions for evacuation and immediate safety measures during a house fire",
      imageUrl: "/api/placeholder/400/200"
    }
    
  ];
  const scenariostwo = [
    {
      title: "Child in Danger",
      description: "Assist a caller reporting a child in immediate danger or distress",
      imageUrl: "/api/placeholder/400/200"
    },
    {
      title: "Car Accident with Injuries",
      description: "Guide a caller through responding to a car accident involving serious injuries",
      imageUrl: "/api/placeholder/400/200"
    },
    {
      title: "Home Intrusion",
      description: "Provide guidance to someone dealing with an intruder in their home",
      imageUrl: "/api/placeholder/400/200"
    },
    {
      title: "Overdose Crisis",
      description: "Support a caller responding to someone experiencing a drug overdose",
      imageUrl: "/api/placeholder/400/200"
    }
    
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ThemedView style={styles.header}>
        <View style={styles.profileSection}>
          <ProfileAvatar />
          <View style={styles.welcomeText}>
            <ThemedText type="title" style={styles.title}>Welcome back!</ThemedText>
            <ThemedText type="subtitle" style={styles.subtitle}>Ready to continue learning?</ThemedText>
          </View>
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Recent Chats</ThemedText>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollContent}
        >
          <RecentChatCard
            name="Language Partner"
            lastMessage="Great progress on your pronunciation!"
            imageUrl="/api/placeholder/60/60"
          />
          <RecentChatCard
            name="Study Group"
            lastMessage="Let's practice together tomorrow"
            imageUrl="/api/placeholder/60/60"
          />
        </ScrollView>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>Scenarios</ThemedText>
        <View style={styles.categoriesGrid}>
          {[
            { name: 'Speaking', icon: 'microphone' },
            { name: 'Listening', icon: 'headphones' },
            { name: 'Writing', icon: 'edit' },
            { name: 'Reading', icon: 'book' }
          ].map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollContent}
        >
          {scenarios.map((scenario, index) => (
            <ScenarioCard key={index} {...scenario} />
          ))}
        </ScrollView>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollContent}
        >
          {scenariostwo.map((scenariostwo, index) => (
            <ScenarioCard key={index} {...scenariostwo} />
          ))}
        </ScrollView>
      </ThemedView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  // Main Container
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // Header Section Styles
  header: {
    padding: SPACING.lg,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    ...createShadow(1),
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.md,
  },
  avatarContainer: {
    backgroundColor: COLORS.border,
    marginRight: SPACING.lg,
    ...createShadow(2),
  },
  welcomeText: {
    flex: 1,
    justifyContent: 'center',
  },

  // Typography
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: SPACING.xs,
    color: COLORS.text.primary,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.text.secondary,
    fontWeight: '500',
    letterSpacing: 0.15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: SPACING.md,
    color: COLORS.text.primary,
    letterSpacing: 0.15,
  },

  // Section Container
  section: {
    padding: SPACING.lg,
    marginBottom: SPACING.sm,
    backgroundColor: COLORS.surface,
  },
  horizontalScrollContent: {
    paddingRight: SPACING.lg,
    gap: SPACING.md,
  },

  // Chat Card Styles
  chatCard: {
    width: 300,
    marginHorizontal: SPACING.xs,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.xs,
    backgroundColor: COLORS.surface,
    ...createShadow(2),
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  chatAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.border,
  },
  chatInfo: {
    flex: 1,
    gap: SPACING.xs,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text.primary,
    letterSpacing: 0.15,
  },
  chatMessage: {
    fontSize: 14,
    color: COLORS.text.secondary,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  chatArrow: {
    marginLeft: SPACING.sm,
    opacity: 0.7,
  },

  // Scenario Card Styles
  scenarioCard: {
    width: 280,
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.md,
    overflow: 'hidden',
    ...createShadow(2),
  },
  scenarioImage: {
    width: '100%',
    height: 140,
    backgroundColor: COLORS.border,
  },
  scenarioContent: {
    padding: SPACING.md,
    gap: SPACING.sm,
  },
  scenarioTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text.primary,
    letterSpacing: 0.15,
  },
  scenarioDescription: {
    fontSize: 14,
    color: COLORS.text.secondary,
    lineHeight: 20,
    letterSpacing: 0.25,
  },

  // Category Grid Styles
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
    gap: SPACING.sm,
  },
  categoryCard: {
    width: '23%',
    aspectRatio: 1,
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.sm,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.sm,
    ...createShadow(1),
  },
  categoryIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.sm,
    ...createShadow(1),
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.text.tertiary,
    textAlign: 'center',
    marginTop: SPACING.xs,
    letterSpacing: 0.1,
  },
});