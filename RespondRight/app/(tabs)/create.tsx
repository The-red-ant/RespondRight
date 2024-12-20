import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView, Platform, StyleSheet, Image, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as React from "react";
import { Text, Card, Button, Icon } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';

// Enhanced color system with semantic naming and additional shades
const COLORS = {
  primary: {
    light: '#339DFF',
    main: '#007AFF',
    dark: '#0056B3'
  },
  secondary: {
    light: '#7A79E0',
    main: '#5856D6',
    dark: '#3F3E99'
  },
  background: {
    light: '#FFFFFF',
    main: '#F8F9FA',
    dark: '#E9ECEF'
  },
  text: {
    primary: '#1A1F36',
    secondary: '#4E5D78',
    tertiary: '#697586',
    inverse: '#FFFFFF'
  },
  difficulty: {
    beginner: {
      light: '#66BB6A',
      main: '#4CAF50',
      dark: '#357A38'
    },
    intermediate: {
      light: '#42A5F5',
      main: '#2196F3',
      dark: '#1769AA'
    },
    advanced: {
      light: '#FFB74D',
      main: '#FF9800',
      dark: '#B26A00'
    },
    expert: {
      light: '#EF5350',
      main: '#F44336',
      dark: '#AA2E25'
    }
  }
};

// Enhanced spacing system with more granular control
const SPACING = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48
};

// Improved shadow utility with platform-specific optimization
const createElevation = (level = 1) => {
  const androidLevel = Math.min(level * 2, 24); // Android elevation cap
  return Platform.select({
    ios: {
      shadowColor: COLORS.text.primary,
      shadowOffset: {
        width: 0,
        height: level * 2,
      },
      shadowOpacity: 0.08 + (level * 0.02),
      shadowRadius: level * 3,
    },
    android: {
      elevation: androidLevel,
    },
  });
};

// Enhanced difficulty selector with animated feedback
const DifficultySelector = ({ difficulty, onSelect }) => {
  const levels = [
    { id: 'beginner', label: 'Beginner', icon: 'leaf' },
    { id: 'intermediate', label: 'Intermediate', icon: 'book' },
    { id: 'advanced', label: 'Advanced', icon: 'fire' },
    { id: 'expert', label: 'Expert', icon: 'star' }
  ];
  
  return (
    <View style={styles.difficultyGrid}>
      {levels.map((level) => {
        const isSelected = difficulty === level.id;
        const colors = COLORS.difficulty[level.id];
        
        return (
          <TouchableOpacity
            key={level.id}
            onPress={() => onSelect(level.id)}
            style={[
              styles.difficultyCard,
              isSelected && { borderColor: colors.main }
            ]}
          >
            <LinearGradient
              colors={isSelected ? [colors.light, colors.main] : ['transparent', 'transparent']}
              style={styles.difficultyGradient}
            >
              <Icon
                name={level.icon}
                type="font-awesome"
                size={24}
                color={isSelected ? COLORS.text.inverse : colors.main}
              />
              <Text style={[
                styles.difficultyLabel,
                { color: isSelected ? COLORS.text.inverse : colors.main }
              ]}>
                {level.label}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// Enhanced input field component with validation and feedback
const FormInput = ({ icon, placeholder, value, onChangeText, multiline, error }) => (
  <View style={styles.inputWrapper}>
    <View style={[
      styles.inputContainer,
      error && styles.inputError
    ]}>
      <Icon
        name={icon}
        type="font-awesome"
        size={20}
        color={error ? COLORS.difficulty.expert.main : COLORS.text.secondary}
      />
      <TextInput
        style={[
          styles.textInput,
          multiline && styles.multilineInput
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.text.tertiary}
        multiline={multiline}
        numberOfLines={multiline ? 3 : 1}
      />
    </View>
    {error && (
      <Text style={styles.errorText}>{error}</Text>
    )}
  </View>
);

export default function CreateScenarioScreen() {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [difficulty, setDifficulty] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    if (!difficulty) newErrors.difficulty = 'Please select a difficulty level';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreateScenario = () => {
    if (validateForm()) {
      // Handle scenario creation
      console.log('Creating scenario:', { title, description, difficulty });
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <LinearGradient
            colors={[COLORS.primary.light, COLORS.primary.main]}
            style={styles.headerGradient}
          >
            <ThemedText type="title" style={styles.title}>
              Create New Scenario
            </ThemedText>
            <ThemedText type="subtitle" style={styles.subtitle}>
              Design an interactive learning experience
            </ThemedText>
          </LinearGradient>
        </View>

        <View style={styles.content}>
          <Card containerStyle={styles.formCard}>
            <Card.Title style={styles.sectionTitle}>Basic Information</Card.Title>
            
            <FormInput
              icon="pencil"
              placeholder="Scenario Title"
              value={title}
              onChangeText={setTitle}
              error={errors.title}
            />
            
            <FormInput
              icon="file-text-o"
              placeholder="Scenario Description"
              value={description}
              onChangeText={setDescription}
              multiline
              error={errors.description}
            />
          </Card>

          <Card containerStyle={styles.formCard}>
            <Card.Title style={styles.sectionTitle}>Difficulty Level</Card.Title>
            <DifficultySelector
              difficulty={difficulty}
              onSelect={setDifficulty}
            />
            {errors.difficulty && (
              <Text style={styles.errorText}>{errors.difficulty}</Text>
            )}
          </Card>

          <Button
            title="Create Scenario"
            onPress={handleCreateScenario}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: [COLORS.primary.light, COLORS.primary.main],
              start: { x: 0, y: 0 },
              end: { x: 1, y: 0 }
            }}
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonText}
            containerStyle={styles.buttonContainer}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.main,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    height: 180,
    overflow: 'hidden',
  },
  headerGradient: {
    flex: 1,
    padding: SPACING.xl,
    justifyContent: 'center',
  },
  content: {
    marginTop: -SPACING.xl,
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.xxl,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.text.inverse,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.background.light,
    opacity: 0.9,
  },
  formCard: {
    borderRadius: 16,
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
    ...createElevation(2),
  },
  sectionTitle: {
    fontSize: 20,
    color: COLORS.text.primary,
    fontWeight: '600',
    marginBottom: SPACING.md,
    textAlign: 'left',
  },
  inputWrapper: {
    marginBottom: SPACING.md,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background.light,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.background.dark,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  inputError: {
    borderColor: COLORS.difficulty.expert.main,
  },
  textInput: {
    flex: 1,
    marginLeft: SPACING.md,
    fontSize: 16,
    color: COLORS.text.primary,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  errorText: {
    color: COLORS.difficulty.expert.main,
    fontSize: 12,
    marginTop: SPACING.xxs,
    marginLeft: SPACING.sm,
  },
  difficultyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  difficultyCard: {
    flex: 1,
    minWidth: '48%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.background.dark,
    overflow: 'hidden',
  },
  difficultyGradient: {
    padding: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1.5,
  },
  difficultyLabel: {
    marginTop: SPACING.sm,
    fontSize: 14,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: SPACING.lg,
    borderRadius: 12,
    overflow: 'hidden',
  },
  createButton: {
    height: 56,
    borderRadius: 12,
  },
  createButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});