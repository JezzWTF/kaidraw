This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where content has been formatted for parsing in markdown style, content has been compressed (code blocks are separated by ⋮---- delimiter).

# Directory Structure
```
.gitignore
env.local.example
eslint.config.js
index.html
postcss.config.js
scripts/analyze-bundle.cjs
scripts/grant-admin-access.cjs
scripts/write-version.cjs
src/components/ExcalidrawErrorBoundary.tsx
src/components/layout/AuthButton.tsx
src/components/layout/Header.tsx
src/components/layout/MainLayout.tsx
src/components/layout/SidebarNav.tsx
src/components/project-manager.tsx
src/components/session-log.tsx
src/components/settings/AccountSettings.tsx
src/components/settings/Avatar.tsx
src/components/settings/FeatureAccessSettings.tsx
src/components/settings/NotificationSettings.tsx
src/components/settings/SettingsMenu.tsx
src/components/task-list.tsx
src/components/tasks/AddSubtaskModal.tsx
src/components/tasks/ApplyTemplateDropdown.tsx
src/components/tasks/DeleteTemplateDialog.tsx
src/components/tasks/EditTemplateDialog.tsx
src/components/tasks/GlobalTaskNotificationSystem.tsx
src/components/tasks/NotificationPanel.tsx
src/components/tasks/SaveTemplateDialog.tsx
src/components/tasks/TaskInput.tsx
src/components/tasks/TaskItem.tsx
src/components/tasks/TaskListSkeleton.tsx
src/components/tasks/TaskNotificationSystem.tsx
src/components/timer-settings.tsx
src/components/timer.tsx
src/components/TimerView.tsx
src/components/todoist-integration.tsx
src/components/ui/accordion.tsx
src/components/ui/alert-dialog.tsx
src/components/ui/alert.tsx
src/components/ui/AnimatedWave.tsx
src/components/ui/avatar.tsx
src/components/ui/badge.tsx
src/components/ui/border-container.tsx
src/components/ui/button.tsx
src/components/ui/calendar.tsx
src/components/ui/card.tsx
src/components/ui/chart.tsx
src/components/ui/checkbox.tsx
src/components/ui/dialog.tsx
src/components/ui/dropdown-menu.tsx
src/components/ui/due-date-reminder-modal.tsx
src/components/ui/form.tsx
src/components/ui/input.tsx
src/components/ui/label.tsx
src/components/ui/menubar.tsx
src/components/ui/popover.tsx
src/components/ui/progress.tsx
src/components/ui/radio-group.tsx
src/components/ui/scroll-area.tsx
src/components/ui/select.tsx
src/components/ui/separator.tsx
src/components/ui/sheet.tsx
src/components/ui/sidebar.tsx
src/components/ui/skeleton.tsx
src/components/ui/sketch-picker.css
src/components/ui/slider.tsx
src/components/ui/switch.tsx
src/components/ui/table.tsx
src/components/ui/tabs.tsx
src/components/ui/textarea.tsx
src/components/ui/toast.tsx
src/components/ui/toaster.tsx
src/components/ui/tooltip.tsx
src/components/visual-reports.tsx
src/components/webhook-integration.tsx
src/components/Whiteboard.css
src/components/Whiteboard.tsx
src/components/WhiteboardView.tsx
src/contexts/ActiveTabContext.tsx
src/contexts/ActiveTabContextDef.tsx
src/contexts/AuthContext.tsx
src/contexts/AuthContextType.ts
src/contexts/authUtils.ts
src/contexts/ProjectContext.tsx
src/contexts/ProjectContextType.ts
src/contexts/session-log-context.tsx
src/contexts/SessionLogContext.ts
src/contexts/SettingsContext.tsx
src/contexts/SettingsContextDef.tsx
src/contexts/TimerContext.tsx
src/contexts/TimerContextType.tsx
src/hooks/use-mobile.tsx
src/hooks/use-sidebar.ts
src/hooks/use-toast.ts
src/hooks/useActiveTab.ts
src/hooks/useAuth.ts
src/hooks/useFeatureAccess.ts
src/hooks/useProjects.ts
src/hooks/useRGBBorder.ts
src/hooks/useSessionLog.ts
src/hooks/useSettings.ts
src/hooks/useTimer.tsx
src/hooks/useUserProfile.ts
src/index.css
src/lib/auth-utils.ts
src/lib/constants/settingsConstants.ts
src/lib/constants/sidebar-constants.ts
src/lib/form-utils.ts
src/lib/logger.ts
src/lib/site-search.ts
src/lib/supabase-types.ts
src/lib/supabase/client.ts
src/lib/supabase/database.types.ts
src/lib/supabase/tasks.ts
src/lib/supabase/templates.ts
src/lib/supabase/userFeatures.ts
src/lib/supabase/whiteboards.ts
src/lib/supabaseClient.ts
src/lib/types/excalidraw-types.ts
src/lib/types/notifications.ts
src/lib/types/session-log-types.ts
src/lib/types/task.ts
src/lib/utils.ts
src/lib/utils/debounce-excalidraw.ts
src/lib/utils/debounce.ts
src/lib/variants/badge-variants.ts
src/lib/variants/button-variants.ts
src/lib/variants/sidebar-variants.ts
src/main.tsx
src/pages/AuthCallbackPage.tsx
src/pages/LoginPage.tsx
src/pages/ProjectOverviewPage.tsx
src/pages/ResetPasswordPage.tsx
src/pages/SettingsPage.tsx
src/pages/WebhookTestPage.tsx
src/pages/WhiteboardPage.tsx
src/pages/WhiteboardTestPage.tsx
src/utils/date-utils.ts
src/utils/direct-webhook.ts
src/utils/errorUtils.ts
src/utils/task-utils.tsx
src/utils/test-webhook.ts
src/utils/uuid.ts
src/utils/webhook-debug.ts
src/utils/webhook-manager.ts
src/vite-env.d.ts
supabase/.gitignore
supabase/config.toml
supabase/functions/_shared/cors.ts
supabase/functions/_shared/supabaseClient.ts
supabase/functions/notify-due-reminders/index.ts
supabase/functions/site-search/index.ts
supabase/migrations/20250522195408_create_whiteboards_table.sql
supabase/migrations/20250524120000_add_rls_to_whiteboards.sql
supabase/migrations/20250524130000_create_user_features_table.sql
tailwind.config.js
test-edge-function.js
test-edge-function.ts
vite.config.ts
```

# Files

## File: env.local.example
```
VITE_SUPABASE_URL=""
VITE_SUPABASE_ANON_KEY=""
```

## File: eslint.config.js
```javascript
export default tseslint.config(
```

## File: postcss.config.js
```javascript

```

## File: src/components/session-log.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Added CardFooter
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button'; // Import Button
import { Trash2 } from 'lucide-react'; // Import Trash icon
import { useSessionLog } from '@/hooks/useSessionLog'; // Import context hook
import { LogEntry } from '@/lib/types/session-log-types'; // Import LogEntry type
// import { Badge } from '@/components/ui/badge'; // Removed unused Badge
// import { format, formatDistanceToNow } from 'date-fns'; // Removed unused date-fns imports
import { BorderContainer } from '@/components/ui/border-container'; // Correct path
// import { useSettings } from '@/contexts/SettingsContext'; // Removed unused useSettings import
⋮----
const { logs, clearLogs } = useSessionLog(); // Get logs and clearLogs from context
⋮----
// const { rgbBorderEnabled } = useSettings(); // Removed unused rgbBorderEnabled
⋮----
// Ensure client-side rendering for locale-specific date formatting
⋮----
// Function to determine text color based on log type
const getLogTextColor = (type: LogEntry['type']) =>
⋮----
return 'text-amber-500'; // Yellow/Amber for notifications
⋮----
return 'text-destructive'; // Red for errors (uses theme variable)
⋮----
return 'text-green-500'; // Green for start
⋮----
return 'text-red-500'; // Red for stop (different shade maybe)
⋮----
return 'text-blue-500'; // Blue for reset
⋮----
return 'italic text-foreground/60'; // Italic dim for info
⋮----
return ''; // Default color
⋮----
forceEnable // Maybe force enable even when empty?
⋮----
// Use log.id as the key, which is now guaranteed unique
⋮----

⋮----
? log.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) // Add seconds
⋮----
<span className={`flex-1 text-right ${getLogTextColor(log.type)}`}> {/* Use function for dynamic styling */}
```

## File: src/components/settings/AccountSettings.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderContainer } from '@/components/ui/border-container';
import { Avatar } from './Avatar';
⋮----
export function AccountSettings()
⋮----
async function getProfile()
⋮----
// Generalized update function for profile fields including avatar
async function updateProfile(profileData: {
    username: string | null;
    website: string | null;
    avatar_url: string | null;
})
⋮----
const handleUpdateProfile = async (e: React.FormEvent) =>
⋮----
const handleUpdateEmail = async (e: React.FormEvent) =>
⋮----
setNewEmail(''); // Clear input after successful request
} catch (error: unknown) { // Changed from any to unknown
⋮----
const handleUpdatePassword = async (e: React.FormEvent) =>
⋮----
} catch (error: unknown) { // Changed from any to unknown
⋮----
return <div>Loading account details...</div>; // Or a skeleton loader
⋮----
updateProfile(
⋮----
onChange=
```

## File: src/components/settings/Avatar.tsx
```typescript
import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
⋮----
interface AvatarProps {
  url: string | null;
  size: number;
  onUpload: (filePath: string) => void; // Callback with the new file path
}
⋮----
onUpload: (filePath: string) => void; // Callback with the new file path
⋮----
const { user } = useAuth(); // Get user from context
⋮----
// Memoize the downloadImage function to prevent unnecessary re-renders
⋮----
// Effect to download the image when the url prop changes
⋮----
// Handle the file upload process
async function uploadAvatar(event: React.ChangeEvent<HTMLInputElement>)
⋮----
// Call the onUpload callback prop with the path, so the parent can save it
⋮----
// Download and display the newly uploaded image immediately
// Note: This re-downloads; alternatively, could create object URL directly from file
⋮----
// Clean up the object URL when component unmounts or URL changes
```

## File: src/components/settings/NotificationSettings.tsx
```typescript
import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabaseClient'; // Assuming supabase client is here
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useTimer } from '@/hooks/useTimer'; // <-- Import useTimer
import { BorderContainer } from '@/components/ui/border-container';
⋮----
export function NotificationSettings()
⋮----
const { refetchCustomNotificationMessage } = useTimer(); // <-- Get the refetch function
⋮----
// Fetch existing setting
⋮----
.from('user_settings') // Assuming table name
⋮----
setCustomMessage(''); // Default to empty if not set
⋮----
// Save setting
const handleSave = async (e: React.FormEvent) =>
⋮----
custom_notification_message: customMessage.trim() || null // Store null if empty/whitespace
⋮----
{ onConflict: 'user_id' } // Upsert based on user_id
⋮----
.select(); // Select to confirm upsert worked
⋮----
// ---> Refetch the message in the context <---
⋮----
{/* Browser Notifications Card */}
⋮----
{/* Removed border, shadow */}
⋮----
maxLength={100} // Add a reasonable max length
⋮----
{/* Placeholder for future scheduling options */}
{/*
              <div>
                <Label>Scheduling (Coming Soon)</Label>
                <p className="text-sm text-muted-foreground">Configure when notifications are sent.</p>
              </div>
              */}
```

## File: src/components/tasks/AddSubtaskModal.tsx
```typescript
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { UITask } from '@/lib/types/task';
⋮----
interface AddSubtaskModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onAddSubtask: (
    subtaskText: string,
    subtaskDuration: number,
    subtaskDescription?: string,
    subtaskNotes?: string
  ) => void;
  parentTask: UITask | null;
  rgbBorderEnabled?: boolean;
}
⋮----
export const AddSubtaskModal: React.FC<AddSubtaskModalProps> = ({
  isOpen,
  onOpenChange,
  onAddSubtask,
  parentTask,
  rgbBorderEnabled,
}) =>
⋮----
const [subtaskDuration, setSubtaskDuration] = useState('10'); // Default to 10 minutes
⋮----
// Reset fields when modal opens
⋮----
const handleSubmit = () =>
⋮----
onOpenChange(false); // Close modal on submit
```

## File: src/components/tasks/ApplyTemplateDropdown.tsx
```typescript
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookmarkPlus, Edit, Trash2 } from 'lucide-react';
import { Template as DbTemplate } from '@/lib/supabase/templates';
import { useToast } from '@/hooks/use-toast'; // For the TODO item
⋮----
interface ApplyTemplateDropdownProps {
  templates: DbTemplate[];
  onEditTemplate: (template: DbTemplate) => void;
  onDeleteTemplate: (templateId: string) => void;
  // onApplyTemplate: (templateId: string) => void; // TODO: Add this prop when implemented
}
⋮----
// onApplyTemplate: (templateId: string) => void; // TODO: Add this prop when implemented
⋮----
const { toast } = useToast(); // For the TODO item
⋮----
/* TODO: Implement applyTemplate(template.id) */
⋮----
onClick=
```

## File: src/components/tasks/DeleteTemplateDialog.tsx
```typescript
import React from 'react';
import {
  Dialog,
  RgbDialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
⋮----
interface DeleteTemplateDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  rgbBorderEnabled?: boolean; // Added for consistency with RgbDialogContent
}
⋮----
rgbBorderEnabled?: boolean; // Added for consistency with RgbDialogContent
```

## File: src/components/tasks/SaveTemplateDialog.tsx
```typescript
import React from 'react';
import {
  Dialog,
  DialogTrigger,
  RgbDialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from 'lucide-react';
⋮----
interface SaveTemplateDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: () => void;
  templateName: string;
  onTemplateNameChange: (name: string) => void;
  rgbBorderEnabled?: boolean;
  disabled?: boolean; // For the trigger button
  buttonSize?: "sm" | "icon" | "default" | "lg" | null | undefined;
  buttonVariant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
}
⋮----
disabled?: boolean; // For the trigger button
⋮----
export const SaveTemplateDialog: React.FC<SaveTemplateDialogProps> = ({
  isOpen,
  onOpenChange,
  onSave,
  templateName,
  onTemplateNameChange,
  rgbBorderEnabled,
  disabled,
  buttonSize = "sm",
  buttonVariant = "outline",
}) =>
⋮----
<Label htmlFor="template-name-dialog" className="text-right">Name</Label> {/* Changed id to avoid conflict if this component is used multiple times with same id strategy */}
```

## File: src/components/tasks/TaskInput.tsx
```typescript
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea'; // Corrected import path for Textarea
import { Button } from '@/components/ui/button';
import { Plus, Minus, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
⋮----
interface TaskInputProps {
  newTaskText: string;
  onNewTaskTextChange: (value: string) => void;
  newTaskDuration: string;
  onNewTaskDurationChange: (value: string) => void;
  onAddTask: () => void;
  onAdjustDuration: (amount: number) => void;
  onInputKeyDown: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // Allow textarea
  // New props for description and notes
  newTaskDescription: string;
  onNewTaskDescriptionChange: (value: string) => void;
  newTaskNotes: string;
  onNewTaskNotesChange: (value: string) => void;
}
⋮----
onInputKeyDown: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // Allow textarea
// New props for description and notes
⋮----
// Destructure new props
⋮----
{/* Main input area with flex responsive layout */}
⋮----
{/* Task input field */}
⋮----
{/* Duration controls group */}
⋮----
{/* Add task button */}
⋮----
{/* Toggle for additional details */}
⋮----
{/* Optional Description and Notes Inputs */}
⋮----
onChange=
⋮----
{/* Quick duration presets */}
```

## File: src/components/tasks/TaskNotificationSystem.tsx
```typescript
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { UITask } from '@/lib/types/task';
import { isTaskOverdue } from '@/utils/date-utils';
import { useAuth } from '@/hooks/useAuth';
⋮----
interface TaskNotificationSystemProps {
  tasks: UITask[];
  enabled: boolean;
  intervalMinutes: number;
  projectId: string;
  projectName: string;
  onTaskSelect: (taskId: string) => void;
}
⋮----
interface StoredNotification {
  id: string;
  taskId: string;
  taskText: string;
  projectId: string;
  projectName: string;
  type: 'due_soon' | 'overdue';
  timestamp: number;
  read: boolean;
}
⋮----
// Using user info for enhanced logging and personalization in notifications
⋮----
// Check notification permission on mount
⋮----
// Request notification permission if needed
⋮----
// Using user information for personalized logging
⋮----
// Save notification locally
⋮----
// Get existing notifications
⋮----
// Add new notification
⋮----
// Add to beginning of array (newest first)
⋮----
// Limit to 50 notifications to prevent localStorage from growing too large
⋮----
// Save back to localStorage
⋮----
// Show toast notification
⋮----
// Show notification for a task
⋮----
// Skip if already notified for this task
⋮----
// Add to notified tasks
⋮----
// Determine notification content
⋮----
// Try native notification first
⋮----
// Fall back to toast
⋮----
// Fall back to toast
⋮----
// Save notification
⋮----
// Check for tasks that need notifications
⋮----
const checkTasks = async () =>
⋮----
// Only check if enough time has passed since last check
⋮----
// Update last check time
⋮----
// Request permission if not granted yet
⋮----
// Show a toast to inform the user
⋮----
// Check for overdue tasks
⋮----
// Check for tasks due soon (within 24 hours)
⋮----
// Due within 24 hours but not overdue
⋮----
// Show notifications for overdue tasks
⋮----
// Show notifications for tasks due soon
⋮----
// Initial check
⋮----
// Set up interval
const intervalId = setInterval(checkTasks, 60000); // Check every minute
⋮----
// Reset notified tasks when tasks change
⋮----
// This component doesn't render anything
```

## File: src/components/timer-settings.tsx
```typescript
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose, // Import DialogClose
} from "@/components/ui/dialog";
⋮----
DialogClose, // Import DialogClose
⋮----
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from '@/hooks/use-toast';
⋮----
interface TimerSettingsProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  currentInterval: number;
  onSave: (newInterval: number) => void;
}
⋮----
// Update input value if the prop changes (e.g., loaded from localStorage)
⋮----
const handleSave = () =>
⋮----
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
⋮----
// Allow only numbers
⋮----
setError(null); // Clear error when user types
⋮----
type="text" // Use text to allow numeric input pattern
inputMode="numeric" // Hint for mobile keyboards
pattern="[0-9]*" // Allow only numbers
```

## File: src/components/ui/accordion.tsx
```typescript
import { ChevronDown } from "lucide-react"
⋮----
import { cn } from "@/lib/utils"
⋮----
className=
```

## File: src/components/ui/alert-dialog.tsx
```typescript
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/lib/variants/button-variants"
```

## File: src/components/ui/alert.tsx
```typescript
import { cva, type VariantProps } from "class-variance-authority"
⋮----
import { cn } from "@/lib/utils"
⋮----
className=
```

## File: src/components/ui/AnimatedWave.tsx
```typescript
import { motion, useTime, useTransform } from 'framer-motion';
import { useMemo } from 'react'; // Import useMemo
⋮----
// Define the type for the component props if needed, e.g., color, speed
interface AnimatedWaveProps {
  color?: string;
  className?: string;
}
⋮----
color = 'hsl(var(--secondary))', // Default to secondary color
⋮----
// Memoize the path generation function to avoid redefining it on every render
⋮----
const amplitude = 25; // Height of the wave
const frequency = 0.01; // How many waves across the width
// Speed is now implicitly controlled by how we transform time
const yOffset = 50; // Vertical position of the wave center
⋮----
let d = 'M 0 ' + yOffset; // Start path at the left edge, vertically centered
⋮----
for (let x = 0; x <= 1000; x += 10) { // Assuming a width of 1000 units
// Use the phase directly in the sine calculation
⋮----
d += ' L 1000 100 L 0 100 Z'; // Close the path at the bottom
⋮----
}, []); // Empty dependency array means this function is created only once
⋮----
// Transform the time value into a smoothly changing phase
// Adjust the multiplier (e.g., 0.0002) to control the wave speed
const phase = useTransform(time, (latestTime) => (latestTime * 0.0002) % (2 * Math.PI)); // Modulo ensures the phase wraps around smoothly
⋮----
// Transform the phase MotionValue into the d attribute string MotionValue
⋮----
viewBox="0 0 1000 100" // Adjust viewBox as needed
⋮----
className={`absolute bottom-0 left-0 w-full h-auto ${className}`} // Position at bottom
style={{ zIndex: 1 }} // Ensure it's behind particles (z-index 0) and card (z-index 10)
⋮----
{/* Apply the transformed d value directly */}
⋮----
d={d} // Use the motion value directly
// No need for initial, animate, or transition props here
// as the animation is driven by the useTransform hook
```

## File: src/components/ui/avatar.tsx
```typescript
import { cn } from "@/lib/utils"
```

## File: src/components/ui/badge.tsx
```typescript
import { type VariantProps } from "class-variance-authority"
⋮----
import { cn } from "@/lib/utils"
import { badgeVariants } from "@/lib/variants/badge-variants"
⋮----
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}
⋮----
<div className=
```

## File: src/components/ui/border-container.tsx
```typescript
import { ReactNode } from 'react';
import { useSettings } from '@/hooks/useSettings';
// import { BorderBeam } from '@stianlarsen/border-beam'; // Remove import
// import '@/assets/border-beam-override.css'; // Remove import
import { cn } from '@/lib/utils'; // Import cn utility
⋮----
// Remove BorderBeamTest component
// export function BorderBeamTest() {
//   return (
//     <div style={{ position: 'relative', width: '300px', height: '300px', border: '1px solid red' }}>
//       <BorderBeam size={1000} duration={5} borderWidth={2} colorFrom="#ff0000" colorTo="#0000ff" />
//       <div style={{ padding: '20px' }}>
//         This is a direct test of the BorderBeam component
//       </div>
//     </div>
//   );
// }
⋮----
interface BorderContainerProps {
  children: ReactNode;
  className?: string;
  // Remove BorderBeam props from destructuring
  // size?: number;
  // duration?: number;
  // borderWidth?: number;
  borderRadius?: string | number;
  // colorFrom?: string;
  // colorTo?: string;
  forceEnable?: boolean;
  id?: string;
}
⋮----
// Remove BorderBeam props from destructuring
// size?: number;
// duration?: number;
// borderWidth?: number;
⋮----
// colorFrom?: string;
// colorTo?: string;
⋮----
// Remove BorderBeam props from destructuring
// size = 1000, // Example default, remove if not needed
// duration = 100, // Example default, remove if not needed
// borderWidth = 1.5, // Example default, remove if not needed
⋮----
// colorFrom = "#4ff9c5", // Example default, remove if not needed
// colorTo = "#9c40ff", // Example default, remove if not needed
⋮----
// // Remove effect related to preventing original CSS load
// useEffect(() => {
//   if (typeof window !== 'undefined') {
//     (window as any).__BORDER_BEAM_CSS_LOADED__ = true;
//   }
// }, []);
⋮----
// Keep 'relative' if your CSS effects need it
⋮----
{/* Remove the BorderBeam component instance */}
{/* {showBorder && (
        <BorderBeam 
          size={size} 
          duration={duration} 
          borderWidth={borderWidth}
          colorFrom={colorFrom}
          colorTo={colorTo}
        />
      )} */}
⋮----
// Removed the withRgbBorder HOC to resolve the fast refresh warning
// export function withRgbBorder<P extends object>(
//   Component: React.ComponentType<P>,
//   borderProps: Omit<BorderContainerProps, 'children'> = {}
// ) {
//   return (props: P) => {
//     return (
//       <BorderContainer {...borderProps}>
//         <Component {...props} />
//       </BorderContainer>
//     );
//   };
// }
```

## File: src/components/ui/button.tsx
```typescript
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"
⋮----
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/lib/variants/button-variants"
⋮----
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
```

## File: src/components/ui/calendar.tsx
```typescript
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
⋮----
import { buttonVariants } from "@/lib/variants/button-variants"
import { cn } from "@/lib/utils"
⋮----
export type CalendarProps = React.ComponentProps<typeof DayPicker>
```

## File: src/components/ui/card.tsx
```typescript
import { cn } from "@/lib/utils"
⋮----
className=
⋮----
<div ref=
```

## File: src/components/ui/chart.tsx
```typescript
import { cn } from "@/lib/utils"
⋮----
// Format: { THEME_NAME: CSS_SELECTOR }
⋮----
export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}
⋮----
type ChartContextProps = {
  config: ChartConfig
}
⋮----
function useChart()
⋮----
className=
⋮----
<div className=
⋮----
// Helper to extract item config from a payload.
```

## File: src/components/ui/checkbox.tsx
```typescript
import { Check } from "lucide-react"
⋮----
import { cn } from "@/lib/utils"
⋮----
className=
```

## File: src/components/ui/dialog.tsx
```typescript
import { X } from "lucide-react"
⋮----
import { cn } from "@/lib/utils"
import { BorderContainer } from "@/components/ui/border-container"
⋮----
// Override default behavior: Ensures aria-describedby is only set when DialogDescription is explicitly used.
⋮----
// Override default behavior: Ensures aria-describedby is only set when DialogDescription is explicitly used.
```

## File: src/components/ui/dropdown-menu.tsx
```typescript
import { Check, ChevronRight, Circle } from "lucide-react"
⋮----
import { cn } from "@/lib/utils"
⋮----
className=
```

## File: src/components/ui/form.tsx
```typescript
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"
⋮----
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { 
  useFormField, 
  FormFieldContext,
  FormItemContext
} from "@/lib/form-utils"
⋮----
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) =>
⋮----
<div ref=
⋮----
className=
```

## File: src/components/ui/input.tsx
```typescript
import { cn } from "@/lib/utils"
⋮----
// Update props to include standard HTML input attributes
⋮----
className=
⋮----
{...props} // Spread all props, including inputMode, pattern, etc.
```

## File: src/components/ui/label.tsx
```typescript
import { cva, type VariantProps } from "class-variance-authority"
⋮----
import { cn } from "@/lib/utils"
```

## File: src/components/ui/menubar.tsx
```typescript
import { Check, ChevronRight, Circle } from "lucide-react"
⋮----
import { cn } from "@/lib/utils"
⋮----
className=
```

## File: src/components/ui/popover.tsx
```typescript
import { cn } from "@/lib/utils"
```

## File: src/components/ui/progress.tsx
```typescript
import { cn } from "@/lib/utils"
⋮----
className=
```

## File: src/components/ui/radio-group.tsx
```typescript
import { Circle } from "lucide-react"
⋮----
import { cn } from "@/lib/utils"
⋮----
className=
```

## File: src/components/ui/scroll-area.tsx
```typescript
import { cn } from "@/lib/utils"
⋮----
className=
```

## File: src/components/ui/select.tsx
```typescript
import { Check, ChevronDown, ChevronUp } from "lucide-react"
⋮----
import { cn } from "@/lib/utils"
⋮----
className=
```

## File: src/components/ui/separator.tsx
```typescript
import { cn } from "@/lib/utils"
```

## File: src/components/ui/sheet.tsx
```typescript
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
⋮----
import { cn } from "@/lib/utils"
⋮----
interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}
⋮----
className=
```

## File: src/components/ui/sidebar.tsx
```typescript
import { Slot } from "@radix-ui/react-slot"
import { VariantProps } from "class-variance-authority"
import { PanelLeft } from "lucide-react"
⋮----
import { useIsMobile } from "@/hooks/use-mobile"
import { useSidebar, SidebarContext } from "@/hooks/use-sidebar"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useActiveTab } from "@/hooks/useActiveTab"
import { sidebarMenuButtonVariants } from "@/lib/variants/sidebar-variants"
import {
  SIDEBAR_COOKIE_NAME,
  SIDEBAR_COOKIE_MAX_AGE,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_MOBILE,
  SIDEBAR_WIDTH_ICON,
  SIDEBAR_KEYBOARD_SHORTCUT,
  type SidebarContext as SidebarContextType
} from "@/lib/constants/sidebar-constants"
⋮----
// This is the internal state of the sidebar.
// We use openProp and setOpenProp for control from outside the component.
⋮----
// This sets the cookie to keep the sidebar state.
⋮----
// Load initial state from cookie on mount (client-side only)
⋮----
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []); // Run only once on mount
⋮----
// Helper to toggle the sidebar.
⋮----
// Adds a keyboard shortcut to toggle the sidebar.
⋮----
const handleKeyDown = (event: KeyboardEvent) =>
⋮----
// We add a state so that we can do data-state="expanded" or "collapsed".
// This makes it easier to style the sidebar with Tailwind classes.
⋮----
className=
⋮----
{/* This is what handles the sidebar gap on desktop */}
⋮----
// Adjust the padding for floating and inset variants.
⋮----
onClick?.(event)
toggleSidebar()
⋮----
// Increases the hit area of the button on mobile.
⋮----
// Increases the hit area of the button on mobile.
⋮----
// Random width between 50 to 90%.
```

## File: src/components/ui/skeleton.tsx
```typescript
import { cn } from "@/lib/utils"
⋮----
className=
```

## File: src/components/ui/sketch-picker.css
```css
.sketch-picker {
⋮----
.sketch-picker label,
⋮----
.sketch-picker input {
⋮----
/* Style the preset color swatches */
.sketch-picker > div:last-child > div:last-child > div > div {
```

## File: src/components/ui/slider.tsx
```typescript
import { cn } from "@/lib/utils"
⋮----
className=
```

## File: src/components/ui/switch.tsx
```typescript
import { cn } from "@/lib/utils"
⋮----
className=
```

## File: src/components/ui/table.tsx
```typescript
import { cn } from "@/lib/utils"
⋮----
className=
⋮----
<thead ref=
```

## File: src/components/ui/tabs.tsx
```typescript
import { cn } from "@/lib/utils"
```

## File: src/components/ui/textarea.tsx
```typescript
import {cn} from '@/lib/utils';
⋮----
className=
```

## File: src/components/ui/toast.tsx
```typescript
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
⋮----
import { cn } from "@/lib/utils"
⋮----
className=
⋮----
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
⋮----
type ToastActionElement = React.ReactElement<typeof ToastAction>
```

## File: src/components/ui/toaster.tsx
```typescript
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
```

## File: src/components/ui/tooltip.tsx
```typescript
import { cn } from "@/lib/utils"
```

## File: src/components/visual-reports.tsx
```typescript
import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label as RechartsLabel } from 'recharts';
import { Button } from '@/components/ui/button';
import { format, subDays, startOfWeek, startOfMonth, endOfMonth, isSameDay, parseISO, isAfter, isBefore, isValid } from 'date-fns';
import { Download, Calendar, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient'; // <-- Import the shared client instance
import { BorderContainer } from '@/components/ui/border-container';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type DateRange } from "react-day-picker";
⋮----
// Sample data structure for session history
interface SessionRecord {
  id: string;
  startTime: string; // ISO string
  endTime: string | null; // ISO string or null if session is ongoing
  duration: number; // seconds
  project?: string; // Optional project name
}
⋮----
startTime: string; // ISO string
endTime: string | null; // ISO string or null if session is ongoing
duration: number; // seconds
project?: string; // Optional project name
⋮----
// Define type for Supabase focus_sessions table data (based on select query)
interface FocusSessionData {
  id: string;
  start_time: string;
  end_time: string | null;
  duration: number;
  project_name?: string | null; // Match the potential nullability from DB
}
⋮----
project_name?: string | null; // Match the potential nullability from DB
⋮----
// Define report data point type
interface ReportDataPoint {
  name: string;
  value: number;
}
⋮----
// Error type for better error handling
interface ApiError {
  message: string;
  [key: string]: unknown;
}
⋮----
const [sessionHistory, setSessionHistory] = useState<SessionRecord[]>([]); // State for fetched data
const [loadingData, setLoadingData] = useState(true); // Loading state for session data
const [selectedProjects, setSelectedProjects] = useState<string[]>([]); // Changed to array for multi-select
const [timeUnit, setTimeUnit] = useState<'hours' | 'minutes'>('hours'); // Added state for time unit
⋮----
const [isUpdatingChart, setIsUpdatingChart] = useState(false); // For loading indicators
⋮----
// Redirect if not logged in
⋮----
// Fetch session history from Supabase
⋮----
const fetchSessionHistory = async () =>
⋮----
return; // Don't fetch if not logged in
⋮----
.select('id, start_time, end_time, duration, project_name') // Adjust columns as needed
⋮----
// Map Supabase data to SessionRecord interface
⋮----
project: item.project_name || undefined, // Handle potential null from DB
⋮----
setSessionHistory([]); // Clear data on error
⋮----
}, [session, toast]); // Re-fetch when session changes
⋮----
// Filter sessions based on selected date range and projects
⋮----
// Date range filter
⋮----
// Set time to end of day for the end date to include the full day
⋮----
// Project filter
⋮----
// Prepare data for the selected time period
⋮----
if (loadingData || !session) return; // Don't process if loading or not logged in
⋮----
const divisor = timeUnit === 'hours' ? 3600 : 60; // Calculate divisor based on unit
const precision = timeUnit === 'hours' ? 2 : 0; // Hours need decimals, minutes usually don't
⋮----
// First filter sessions based on date range and projects
⋮----
// Daily view - last 7 days or custom date range
⋮----
// Calculate number of days in the range
⋮----
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include both start and end dates
⋮----
value: parseFloat((totalSeconds / divisor).toFixed(precision)) // Use dynamic divisor and precision
⋮----
// Only reverse if not using custom date range
⋮----
filteredData = filteredData.reverse(); // Show oldest to newest (left to right)
⋮----
// Weekly view - last 4 weeks or custom date range
⋮----
// Calculate number of weeks in the range (approximately)
⋮----
// Only reverse if not using custom date range
⋮----
// Monthly view - last 3 months or custom date range
⋮----
// Calculate number of months in the range (approximately)
⋮----
dateRange.to.getMonth() - dateRange.from.getMonth() + 1; // +1 to include both start and end months
⋮----
// Only reverse if not using custom date range
⋮----
// Yearly view - last 3 years or custom date range
⋮----
// Calculate number of years in the range
const years = dateRange.to.getFullYear() - dateRange.from.getFullYear() + 1; // +1 to include both start and end years
⋮----
// Only reverse if not using custom date range
⋮----
setReportData([]); // Clear data on error
⋮----
// Helper to format date for display
const formatDate = (date: Date | undefined) =>
⋮----
// Handler for date range changes from Calendar or inputs
const handleDateRangeChange = (range: DateRange | undefined) =>
⋮----
// If the range is undefined (e.g., from clear button), reset it
⋮----
// If manual input clears a date, range might have undefined properties
⋮----
// Update filtering state only if both dates are present
⋮----
// Handler for project selection toggle
const handleProjectToggle = (project: string) =>
⋮----
// Function to clear all filters
const clearFilters = () =>
⋮----
handleDateRangeChange(undefined); // Use the updated handler to clear dates
⋮----
// Download report data
const handleDownloadReport = () =>
⋮----
// Ensure reportData exists and has content
⋮----
// Create CSV content
⋮----
// Add date range to filename if filtering by date
⋮----
// Add project filter info to filename if filtering by projects
⋮----
// Create CSV content
const headers = ['Period', `Duration (${timeUnit})`]; // Dynamic header
⋮----
csvRows.push(`${row.name},${row.value}`); // Use new value key
⋮----
// Extract unique project names for the filter dropdown
const getUniqueProjects = () =>
⋮----
.filter((project): project is string => project !== undefined); // Type guard to ensure it's string
⋮----
// Show loading indicator while checking auth state
⋮----
// If not logged in (and not loading), don't render the component (redirect will handle it)
⋮----
// Show loading indicator while fetching data
⋮----
// If logged in, render the reports component
⋮----
{/* Main Report Card */}
⋮----
{/* Date Range Filter */}
⋮----
className=
⋮----

⋮----
const date = e.target.value ? new Date(e.target.value + 'T00:00:00') : undefined; // Ensure parsing as local date
⋮----
const date = e.target.value ? new Date(e.target.value + 'T00:00:00') : undefined; // Ensure parsing as local date
⋮----
disabled=
⋮----
{/* Project Filter */}
⋮----
checked=
⋮----
{/* Time Unit Filter */}
⋮----
{/* Clear Filters Button */}
⋮----
{/* Download Button */}
⋮----
{/* Dynamic Y-axis label */}
⋮----
formatter={(value) => [`${value} ${timeUnit}`, `Duration`]} // Dynamic tooltip content
```

## File: src/components/webhook-integration.tsx
```typescript
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';
import { Webhook, Plus, Trash2, Copy, ExternalLink, Terminal } from 'lucide-react';
import { generateCurlCommand } from '@/utils/test-webhook';
import { debugWebhook } from '@/utils/webhook-debug';
import { sendDirectWebhook, sendSimpleGetWebhook } from '@/utils/direct-webhook';
import { BorderContainer } from '@/components/ui/border-container';
⋮----
interface WebhookConfig {
  id: string;
  name: string;
  url: string;
  event: WebhookEvent;
  active: boolean;
  createdAt: Date;
  lastTriggered?: Date;
}
⋮----
export type WebhookEvent = 'session.start' | 'session.end' | 'session.reset' | 'task.completed';
⋮----
// Load webhooks on mount
⋮----
// Load webhooks from localStorage
⋮----
// Convert string dates back to Date objects
⋮----
// Save webhooks to localStorage when they change
⋮----
// Save webhook
const handleSaveWebhook = () =>
⋮----
// Add new webhook
⋮----
// Update existing webhook
⋮----
// Toggle webhook active state
const toggleWebhookActive = (id: string) =>
⋮----
// Delete webhook
const deleteWebhook = (id: string) =>
⋮----
// If all webhooks have been removed, clear the localStorage item
⋮----
// Test webhook
const testWebhook = (webhook: WebhookConfig) =>
⋮----
// Create test payload based on event type
⋮----
duration: 1500, // example duration in seconds
⋮----
// Actually send the webhook HTTP request
⋮----
// Update last triggered time
⋮----
// Check for specific network error that might indicate CORS issues
⋮----
// If we suspect a CORS error, show a more helpful message
⋮----
// Still update the last triggered time since the webhook might have delivered
⋮----
// For other errors, show the original error message
⋮----
// Test webhook with debugging
const testWebhookWithDebug = (webhook: WebhookConfig) =>
⋮----
// Update last triggered time
⋮----
// Test webhook with direct method
const testWebhookDirect = (webhook: WebhookConfig) =>
⋮----
// Update last triggered time
⋮----
// Test webhook with simple GET
const testWebhookSimpleGet = (webhook: WebhookConfig) =>
⋮----
// Update last triggered time
⋮----
// Open edit dialog
const openEditDialog = (webhook: WebhookConfig) =>
⋮----
// Open add dialog
const openAddDialog = () =>
⋮----
// Reset form
const resetForm = () =>
⋮----
// Copy to clipboard with generic handling
const copyToClipboard = (text: string, successMessage: string = "Copied to clipboard") =>
⋮----
// Generate curl command for testing
const getCurlCommand = (webhook: WebhookConfig) =>
⋮----
// Format event name for display
const formatEventName = (event: WebhookEvent) =>
⋮----
// Format date for display
const formatDate = (date?: Date) =>
⋮----
Last triggered:
⋮----
{/* Add/Edit Webhook Dialog */}
```

## File: src/contexts/ActiveTabContext.tsx
```typescript
import React, { useState, ReactNode } from 'react';
import { ActiveTabContext, ActiveTabContextProps } from '@/contexts/ActiveTabContextDef';
⋮----
// Re-export the context and type
⋮----
interface ActiveTabProviderProps {
  children: ReactNode;
  initialTab?: string;
}
⋮----
export const ActiveTabProvider: React.FC<ActiveTabProviderProps> = (
```

## File: src/contexts/ActiveTabContextDef.tsx
```typescript
import { createContext, Dispatch, SetStateAction } from 'react';
⋮----
export interface ActiveTabContextProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}
```

## File: src/contexts/AuthContextType.ts
```typescript
import { createContext } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabaseClient';
⋮----
// Define the shape of the context data
export interface AuthContextProps {
  session: Session | null;
  user: User | null;
  supabaseClient: typeof supabase;
  loading: boolean;
}
⋮----
// Create the context with a default value
```

## File: src/contexts/authUtils.ts
```typescript
// Re-export useAuth for backward compatibility
import { useAuth } from '@/hooks/useAuth';
```

## File: src/contexts/session-log-context.tsx
```typescript
import React, { useState, useCallback, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LogEntry } from '@/lib/types/session-log-types';
import { SessionLogContext } from './SessionLogContext';
// import { formatTime } from '@/lib/utils'; // Import formatTime
⋮----
// Create the provider component
export const SessionLogProvider: React.FC<
⋮----
// const logCounterRef = useRef(0); // Counter for ensuring unique IDs
⋮----
const uniqueId = uuidv4(); // Generate a unique ID for the clear message
// const clearLogEntry: LogEntry = {
//   id: uniqueId,
//   timestamp: new Date(),
//   type: 'info', // Use a valid type
//   message: 'Logs cleared.',
// };
// Set logs to only contain the clear message, or clear completely
⋮----
type: 'info', // Assign a valid type
⋮----
}]); // Keep only the clear message
// Or clear completely: setLogs([]);
```

## File: src/contexts/SessionLogContext.ts
```typescript
import { createContext } from 'react';
import { SessionLogContextValue } from '@/lib/types/session-log-types';
⋮----
// Create the context
```

## File: src/contexts/TimerContextType.tsx
```typescript
import { createContext } from 'react';
⋮----
export interface TimerState {
  isRunning: boolean;
  elapsedTime: number; // Time in seconds
  startTime: number | null; // Timestamp when the current run segment started/resumed (epoch ms)
  elapsedTimeAtStart: number; // Elapsed time when the current run segment started
  sessionId: string | null; // ID for the current logical session
  sessionInitialStartTime: number | null; // Timestamp when the logical session first started
  activeProjectId: string | null; // ID of the project associated with the current session
}
⋮----
elapsedTime: number; // Time in seconds
startTime: number | null; // Timestamp when the current run segment started/resumed (epoch ms)
elapsedTimeAtStart: number; // Elapsed time when the current run segment started
sessionId: string | null; // ID for the current logical session
sessionInitialStartTime: number | null; // Timestamp when the logical session first started
activeProjectId: string | null; // ID of the project associated with the current session
⋮----
export interface TimerSettingsState {
  notificationIntervalMinutes: number;
  customNotificationMessage: string | null; // Custom message for notifications
}
⋮----
customNotificationMessage: string | null; // Custom message for notifications
⋮----
export interface TimerContextProps extends TimerState, TimerSettingsState {
  loading: boolean; // Loading state indicator
  startTimer: (projectId?: string | null) => void;
  pauseTimer: () => void; // Replaces stopTimer for pausing
  saveAndResetTimer: () => void; // For final save and reset
  resetTimer: () => void; // For resetting without saving
  getFormattedTime: (totalSeconds?: number) => string;
  updateNotificationInterval: (newInterval: number) => void; // Setter for interval
  setActiveProjectIdForTimer: (projectId: string | null) => void; // Set associated project ID
  refetchCustomNotificationMessage: () => void; // Refetch function
}
⋮----
loading: boolean; // Loading state indicator
⋮----
pauseTimer: () => void; // Replaces stopTimer for pausing
saveAndResetTimer: () => void; // For final save and reset
resetTimer: () => void; // For resetting without saving
⋮----
updateNotificationInterval: (newInterval: number) => void; // Setter for interval
setActiveProjectIdForTimer: (projectId: string | null) => void; // Set associated project ID
refetchCustomNotificationMessage: () => void; // Refetch function
⋮----
// Create the context with undefined as initial value
⋮----
// Constants used by the timer
```

## File: src/hooks/use-mobile.tsx
```typescript
export function useIsMobile()
⋮----
const onChange = () =>
```

## File: src/hooks/use-sidebar.ts
```typescript
import { type SidebarContext } from "@/lib/constants/sidebar-constants"
⋮----
// We define the context type here to avoid a circular dependency
⋮----
export function useSidebar()
```

## File: src/hooks/use-toast.ts
```typescript
// Inspired by react-hot-toast library
⋮----
import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"
⋮----
type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}
⋮----
// Define action types as string literals directly
type Action =
  | {
      type: "ADD_TOAST"
      toast: ToasterToast
    }
  | {
      type: "UPDATE_TOAST"
      toast: Partial<ToasterToast>
    }
  | {
      type: "DISMISS_TOAST"
      toastId?: ToasterToast["id"]
    }
  | {
      type: "REMOVE_TOAST"
      toastId?: ToasterToast["id"]
    }
⋮----
function genId()
⋮----
interface State {
  toasts: ToasterToast[]
}
⋮----
const addToRemoveQueue = (toastId: string) =>
⋮----
export const reducer = (state: State, action: Action): State =>
⋮----
// ! Side effects ! - This could be extracted into a dismissToast() action,
// but I'll keep it here for simplicity
⋮----
function dispatch(action: Action)
⋮----
type Toast = Omit<ToasterToast, "id">
⋮----
function toast(
⋮----
const update = (props: ToasterToast)
const dismiss = () => dispatch(
⋮----
function useToast()
```

## File: src/hooks/useActiveTab.ts
```typescript
import { useContext } from 'react';
import { ActiveTabContext } from '../contexts/ActiveTabContext';
⋮----
export const useActiveTab = () =>
```

## File: src/hooks/useAuth.ts
```typescript
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextType';
⋮----
// Custom hook for using the auth context
export const useAuth = () =>
```

## File: src/hooks/useProjects.ts
```typescript
import { useContext } from 'react';
import { ProjectContext } from '@/contexts/ProjectContextType';
⋮----
// Custom hook to use the project context
export const useProjects = () =>
```

## File: src/hooks/useRGBBorder.ts
```typescript
// This hook is no longer needed after removing the border-beam package.
```

## File: src/hooks/useSessionLog.ts
```typescript
import { useContext } from 'react';
import { SessionLogContext } from '@/contexts/SessionLogContext';
⋮----
// Custom hook to use the session log context
export const useSessionLog = () =>
```

## File: src/hooks/useSettings.ts
```typescript
import { useContext } from 'react';
import { SettingsContext } from '../contexts/SettingsContextDef';
⋮----
export const useSettings = () =>
```

## File: src/hooks/useTimer.tsx
```typescript
import { useContext } from 'react';
import { TimerContext } from '@/contexts/TimerContext';
⋮----
// --- Hook ---
export const useTimer = () =>
```

## File: src/lib/constants/sidebar-constants.ts
```typescript
export type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}
```

## File: src/lib/form-utils.ts
```typescript
import {
  FieldPath,
  FieldValues,
  useFormContext
} from "react-hook-form"
⋮----
// Import context types and values from form components
export interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName
}
⋮----
export interface FormItemContextValue {
  id: string
}
⋮----
// Create the contexts here so they can be imported in the form component
⋮----
// Export the useFormField function that will be used in the form components
export const useFormField = () =>
```

## File: src/lib/supabase-types.ts
```typescript
export type TriggeredReminder = {
  id: string;
  user_id: string;
  task_id: string;
  triggered_at: string;
  created_at?: string;
};
⋮----
// Extend this interface if you need to add to existing Supabase database types
export interface Database {
  public: {
    Tables: {
      triggered_reminders: {
        Row: TriggeredReminder;
        Insert: Omit<TriggeredReminder, 'id' | 'created_at'>;
        Update: Partial<Omit<TriggeredReminder, 'id' | 'created_at'>>;
      };
      // Add other tables as needed
    };
  };
}
⋮----
// Add other tables as needed
```

## File: src/lib/supabase/client.ts
```typescript
/**
 * @deprecated This file is deprecated and should not be used directly.
 * Please import the singleton client from '../supabaseClient.ts' instead to avoid 
 * "Multiple GoTrueClient instances detected" warnings.
 */
import { createBrowserClient } from '@supabase/ssr'
import type { Database } from './database.types' // Import the generated types
⋮----
/**
 * @deprecated Use the singleton client from '../supabaseClient.ts' instead
 */
export function createClient()
⋮----
// Pass Database as the generic type argument
```

## File: src/lib/supabase/templates.ts
```typescript
import { supabase } from '../supabaseClient';
import type { Database } from './database.types';
⋮----
// Define types based on generated schema
export type Template = Database['public']['Tables']['templates']['Row'] & {
  tasks: TemplateTask[];
};
export type TemplateTask = Database['public']['Tables']['template_tasks']['Row'];
export type TemplateTaskInsert = Database['public']['Tables']['template_tasks']['Insert'];
export type TemplateInsert = Database['public']['Tables']['templates']['Insert'];
export type TemplateUpdate = Database['public']['Tables']['templates']['Update'];
⋮----
/**
 * Fetches all templates and their associated tasks for the currently logged-in user.
 */
export async function getTemplates(): Promise<Template[]>
⋮----
// Explicitly type the data returned by the query before processing
// .returns<(Omit<Template, 'tasks'> & { tasks: TemplateTask[] })[]>();
// .order('created_at', { ascending: false }); // Order templates by creation date
// Ordering templates first, then tasks within each template
⋮----
return []; // Return empty array if no templates are found
⋮----
// Ensure tasks within each template are ordered correctly
⋮----
/**
 * Creates a new template with its associated tasks for the logged-in user.
 * Uses a Supabase function (template_create) for transactional integrity.
 */
export async function createTemplate(
    name: string,
    tasks: Omit<TemplateTaskInsert, 'template_id' | 'id' | 'created_at'>[], // Tasks without template_id
    userId: string
): Promise<Template>
⋮----
tasks: Omit<TemplateTaskInsert, 'template_id' | 'id' | 'created_at'>[], // Tasks without template_id
⋮----
// Ensure tasks have correct order starting from 0
⋮----
// 1. Insert the template
⋮----
// 2. Prepare tasks with the new template ID
⋮----
// 3. Insert the tasks
⋮----
// Attempt to roll back the template creation if tasks fail
⋮----
// Return the complete template object
⋮----
/**
 * Updates an existing template (name) and replaces its tasks.
 */
export async function updateTemplate(
    templateId: string,
    updates: {
        name?: string;
        tasks?: Omit<TemplateTaskInsert, 'template_id' | 'id' | 'created_at'>[]; // Optional new task list
    }
): Promise<Template>
⋮----
tasks?: Omit<TemplateTaskInsert, 'template_id' | 'id' | 'created_at'>[]; // Optional new task list
⋮----
// 1. Update template name if provided
⋮----
// 2. Replace tasks if provided
⋮----
// Delete existing tasks for this template
⋮----
// Note: Template name might already be updated. Consider how to handle partial failures.
⋮----
// Prepare and insert new tasks
⋮----
// Note: Template name updated, old tasks deleted, but new tasks failed. State is inconsistent.
⋮----
// 3. Fetch the updated template with its tasks to return
⋮----
// Ensure tasks within the returned template are ordered correctly
⋮----
/**
 * Deletes a template and its associated tasks (handled by CASCADE DELETE constraint).
 */
export async function deleteTemplate(templateId: string): Promise<void>
```

## File: src/lib/types/notifications.ts
```typescript
export type NotificationCategory = 'task' | 'system' | 'account' | 'generic';
⋮----
export type TaskNotificationType = 
  | 'due_soon'          // Task is approaching its due date (e.g., within 24 hours)
  | 'overdue'           // Task is past its due date and not completed
  | 'reminder_custom'   // Custom reminder as set by user
  | 'reminder_day_before' // Reminder for the day before due date
  | 'reminder_hour_before'// Reminder for an hour before due time
  | 'reminder_on_due_date';// Reminder on the due date at specified time
⋮----
| 'due_soon'          // Task is approaching its due date (e.g., within 24 hours)
| 'overdue'           // Task is past its due date and not completed
| 'reminder_custom'   // Custom reminder as set by user
| 'reminder_day_before' // Reminder for the day before due date
| 'reminder_hour_before'// Reminder for an hour before due time
| 'reminder_on_due_date';// Reminder on the due date at specified time
⋮----
export type SystemNotificationType = 
  | 'new_feature' 
  | 'maintenance' 
  | 'announcement';
⋮----
export type AccountNotificationType = 
  | 'subscription_renewal' 
  | 'security_alert' 
  | 'profile_update_request';
⋮----
export type GenericNotificationType = 
  | 'info' 
  | 'warning' 
  | 'error';
⋮----
export type NotificationType = TaskNotificationType | SystemNotificationType | AccountNotificationType | GenericNotificationType;
⋮----
// Base interface for all notifications
export interface BaseNotification {
  id: string; // Unique ID for the notification
  timestamp: number; // When the notification was generated
  category: NotificationCategory;
  type: NotificationType;
  title: string;
  message: string; // Detailed message for the notification
  read: boolean;
  icon?: string; // Optional: for specific icons per notification (e.g., path or Lucide icon name)
  actionUrl?: string; // Optional: URL to navigate to when the in-app notification is clicked
}
⋮----
id: string; // Unique ID for the notification
timestamp: number; // When the notification was generated
⋮----
message: string; // Detailed message for the notification
⋮----
icon?: string; // Optional: for specific icons per notification (e.g., path or Lucide icon name)
actionUrl?: string; // Optional: URL to navigate to when the in-app notification is clicked
⋮----
// Interface for Task-specific notifications
export interface TaskNotification extends BaseNotification {
  category: 'task';
  type: TaskNotificationType;
  taskId: string;
  taskText: string; // Storing task text directly for easier display in notifications
  projectId: string;
  projectName: string;
  dueDate?: string | null; // Store due date for context in the notification
}
⋮----
taskText: string; // Storing task text directly for easier display in notifications
⋮----
dueDate?: string | null; // Store due date for context in the notification
⋮----
// Interface for System notifications
export interface SystemNotification extends BaseNotification {
  category: 'system';
  type: SystemNotificationType;
  link?: string; // e.g., link to a blog post about a new feature or a settings page
}
⋮----
link?: string; // e.g., link to a blog post about a new feature or a settings page
⋮----
// Interface for Account notifications
export interface AccountNotification extends BaseNotification {
  category: 'account';
  type: AccountNotificationType;
  userId: string; // To identify the user this notification pertains to
}
⋮----
userId: string; // To identify the user this notification pertains to
⋮----
// Interface for Generic notifications (can be used for simple informational toasts or messages)
export interface GenericNotification extends BaseNotification {
  category: 'generic';
  type: GenericNotificationType;
}
⋮----
// Union type for all possible notification structures that will be stored
export type StoredNotification = TaskNotification | SystemNotification | AccountNotification | GenericNotification;
⋮----
/**
 * Generates a unique ID for notifications.
 * @returns A string representing the unique ID.
 */
export const generateNotificationId = (): string =>
```

## File: src/lib/types/session-log-types.ts
```typescript
// Define the shape of a log entry
export interface LogEntry {
  id: string;
  timestamp: Date;
  type: 'start' | 'stop' | 'reset' | 'notification' | 'info' | 'error';
  message: string;
}
⋮----
// Define the shape of the context value
export interface SessionLogContextValue {
  logs: LogEntry[];
  addLog: (type: LogEntry['type'], message: string) => void;
  clearLogs: () => void;
}
```

## File: src/lib/variants/badge-variants.ts
```typescript
import { cva } from "class-variance-authority"
```

## File: src/lib/variants/button-variants.ts
```typescript
import { cva } from "class-variance-authority"
```

## File: src/lib/variants/sidebar-variants.ts
```typescript
import { cva } from "class-variance-authority";
```

## File: src/pages/WebhookTestPage.tsx
```typescript
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import { debugWebhook } from '@/utils/webhook-debug';
import { sendDirectWebhook, sendSimpleGetWebhook } from '@/utils/direct-webhook';
import { WebhookEvent } from '@/components/webhook-integration';
import { BorderContainer } from '@/components/ui/border-container';
⋮----
const addResult = (message: string) =>
⋮----
// Test with debug utility
const runDebugTest = async () =>
⋮----
// Test with XHR
const runXhrTest = async () =>
⋮----
// Test with GET method
const runGetTest = async () =>
⋮----
// Generate curl command
const getCurlCommand = () =>
```

## File: src/utils/direct-webhook.ts
```typescript
/**
 * A simple webhook sender that uses XMLHttpRequest instead of fetch
 * Sometimes XMLHttpRequest can work when fetch has issues
 */
⋮----
import { WebhookEvent } from '@/components/webhook-integration';
⋮----
/**
 * Send a webhook using XMLHttpRequest instead of fetch
 */
export function sendDirectWebhook(url: string, event: WebhookEvent = 'task.completed'): Promise<boolean>
⋮----
// Create our test payload
⋮----
// Create XMLHttpRequest
⋮----
// Set headers
⋮----
// Handle response (will likely be CORS blocked, but we don't care)
⋮----
// We still consider this a "success" since the request might have been sent
// even if the browser blocks the response
⋮----
// Even with error, the request might have succeeded
⋮----
// Send the request
⋮----
/**
 * Send a simple test webhook with a GET request
 * This bypasses many CORS restrictions
 */
export function sendSimpleGetWebhook(url: string): Promise<boolean>
⋮----
// Add a query parameter with timestamp to prevent caching
⋮----
// Create a temporary image to send the GET request
// This avoids CORS issues
⋮----
// Set up handlers
⋮----
// An error doesn't mean the request failed to reach the server
// It just means the image couldn't be loaded (which is expected)
⋮----
// Send the request by setting the src
⋮----
/**
 * Usage:
 * 
 * import { sendDirectWebhook, sendSimpleGetWebhook } from './utils/direct-webhook';
 * 
 * // Try XMLHttpRequest method
 * sendDirectWebhook('https://webhook.site/your-id');
 * 
 * // Try the simplest GET method 
 * sendSimpleGetWebhook('https://webhook.site/your-id');
 */
```

## File: src/utils/test-webhook.ts
```typescript
/**
 * This is a utility script to test webhook functionality directly.
 * Import this file and call testWebhook() from the browser console to trigger a test.
 */
⋮----
export async function testWebhook(webhookUrl: string): Promise<boolean>
⋮----
// In most cases with webhook.site, the request likely succeeded
⋮----
/**
 * Alternative method using curl command - can be copy-pasted into a terminal
 */
export function generateCurlCommand(webhookUrl: string): string
⋮----
// Format the curl command
⋮----
/**
 * Instructions for testing:
 * 
 * 1. Open your browser console (F12 or Right-click > Inspect > Console)
 * 2. Run the following code to test directly:
 * 
 * import { testWebhook } from './utils/test-webhook';
 * testWebhook('https://webhook.site/your-unique-id');
 * 
 * 3. If you experience CORS issues, use the curl command approach:
 * 
 * import { generateCurlCommand } from './utils/test-webhook';
 * console.log(generateCurlCommand('https://webhook.site/your-unique-id'));
 * 
 * Then copy the curl command and run it in a terminal.
 */
```

## File: src/utils/uuid.ts
```typescript
/**
 * Generates a UUID
 * Uses crypto.randomUUID() when available, falls back to a less secure but compatible alternative
 */
export function generateUUID(): string
⋮----
// Fallback implementation for environments without crypto.randomUUID()
```

## File: src/utils/webhook-debug.ts
```typescript
/**
 * Webhook Debug Utility
 * This file contains utilities to debug webhook delivery issues,
 * specifically focusing on the 0-byte payload problem.
 */
⋮----
import { WebhookEvent } from '@/components/webhook-integration';
⋮----
/**
 * Tests a webhook with explicit monitoring to help debug 0-byte issues
 */
export async function debugWebhook(webhookUrl: string, event: WebhookEvent = 'task.completed'): Promise<void>
⋮----
// Create test payload
⋮----
// Use fetch with detailed logging
⋮----
const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
⋮----
/**
 * Modifies the webhook manager to add additional debug logging
 */
export function patchWebhookManager(): void
⋮----
// This function would patch the webhook manager to add detailed logging
⋮----
// In a real implementation, this could monkey-patch the sendWebhook function
// to add more verbose logging
⋮----
/**
 * Logs details about all registered webhooks
 */
export function inspectWebhooks(): void
⋮----
/**
 * Usage instructions:
 * 
 * 1. Open browser console (F12)
 * 2. Import and run the debug functions:
 * 
 * import { debugWebhook, inspectWebhooks } from './utils/webhook-debug';
 * 
 * // First check registered webhooks
 * inspectWebhooks();
 * 
 * // Then run a debug test
 * debugWebhook('https://webhook.site/your-unique-url');
 */
```

## File: src/utils/webhook-manager.ts
```typescript
import { WebhookEvent } from '@/components/webhook-integration';
⋮----
interface WebhookConfig {
  id: string;
  name: string;
  url: string;
  event: WebhookEvent;
  active: boolean;
  createdAt: Date;
  lastTriggered?: Date;
}
⋮----
/**
 * Triggers all active webhooks for a specific event
 * @param event The event type that occurred
 * @param data Additional data to include in the webhook payload
 */
export const triggerWebhooks = async (
  event: WebhookEvent, 
  data: Record<string, unknown> = {}
): Promise<void> =>
⋮----
// Get all webhooks from localStorage
⋮----
// Filter active webhooks that match this event
⋮----
// Prepare base payload
⋮----
// Send webhooks in parallel
⋮----
// Update last triggered time for successful webhooks
⋮----
// Save updated webhooks back to localStorage
⋮----
// Log results
⋮----
/**
 * Sends a webhook to a specific URL
 * @param webhook The webhook configuration
 * @param payload The data to send
 * @returns Promise resolving to success status
 */
const sendWebhook = async (
  webhook: WebhookConfig, 
  payload: Record<string, unknown>
): Promise<boolean> =>
⋮----
// Stringify the payload to ensure consistency
⋮----
// Use XMLHttpRequest instead of fetch, which can be more reliable for webhook scenarios
⋮----
// Set content headers
⋮----
// Handle response - we consider it successful even if CORS blocks the response
⋮----
// 2xx status codes indicate success
⋮----
// Even with error status, the request might have still been delivered,
// especially when testing with webhook.site
⋮----
// Handle network errors
⋮----
// When testing with webhook.site, network errors are often just CORS issues
// and the webhook might still have been delivered.
// We'll resolve as true to update the lastTriggered timestamp.
⋮----
// Send the request with the payload
⋮----
// We assume the request is on its way now
```

## File: tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
```

## File: .gitignore
```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# production
/build
/dist

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

.genkit/*
.env*
.txt/
.repomixignore
repomix-output.*
repomix.*
.db
mcp.json

# supabase
.branches/
.temp/
```

## File: scripts/analyze-bundle.cjs
```
/**
 * Bundle Analysis Script
 * Analyzes the build output to provide insights into bundle size and composition
 */
⋮----
function formatBytes(bytes) {
⋮----
const i = Math.floor(Math.log(bytes) / Math.log(k));
return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
⋮----
function analyzeBundle() {
const distPath = path.join(process.cwd(), 'dist');
⋮----
if (!fs.existsSync(distPath)) {
console.error('❌ Build directory not found. Run "pnpm build" first.');
process.exit(1);
⋮----
console.log('🔍 Bundle Analysis Report');
console.log('========================\n');
⋮----
// Analyze assets directory
const assetsPath = path.join(distPath, 'assets');
if (!fs.existsSync(assetsPath)) {
console.error('❌ Assets directory not found.');
⋮----
const files = fs.readdirSync(assetsPath);
const jsFiles = files.filter(file => file.endsWith('.js'));
const cssFiles = files.filter(file => file.endsWith('.css'));
⋮----
// Analyze JavaScript files
console.log('📊 JavaScript Chunks:');
console.log('---------------------');
⋮----
jsFiles.forEach(file => {
const filePath = path.join(assetsPath, file);
const stats = fs.statSync(filePath);
⋮----
fileAnalysis.push({
⋮----
console.log(`${status} ${file}: ${formatBytes(size)}`);
⋮----
// Analyze CSS files
⋮----
console.log('\n🎨 CSS Files:');
console.log('-------------');
⋮----
cssFiles.forEach(file => {
⋮----
console.log(`✅ ${file}: ${formatBytes(size)}`);
⋮----
// Overall statistics
console.log('\n📈 Bundle Statistics:');
⋮----
console.log(`Total Assets Size: ${formatBytes(totalSize)}`);
console.log(`JavaScript Files: ${jsFiles.length}`);
console.log(`CSS Files: ${cssFiles.length}`);
⋮----
// Check for large files
const largeFiles = fileAnalysis.filter(file => file.size > 500000);
⋮----
console.log('\n⚠️  Large Files (>500KB):');
console.log('-------------------------');
largeFiles.forEach(file => {
console.log(`${file.name}: ${formatBytes(file.size)}`);
⋮----
// Check Excalidraw lazy loading
console.log('\n🔍 Excalidraw Analysis:');
console.log('----------------------');
⋮----
const content = fs.readFileSync(filePath, 'utf8');
⋮----
// Check for static Excalidraw imports (bad)
if (content.includes('excalidraw') && !content.includes('import(')) {
⋮----
console.log(`⚠️  Found Excalidraw reference in ${file} (potential static import)`);
⋮----
// Check for dynamic imports (good)
if (content.includes('import(') && content.includes('excalidraw')) {
⋮----
console.log(`✅ Found dynamic import for Excalidraw in ${file}`);
⋮----
console.log('✅ Excalidraw appears to be properly lazy-loaded');
⋮----
console.log('❌ Warning: Excalidraw may be included in main bundle');
⋮----
console.log('ℹ️  No Excalidraw references found (component may not be built)');
⋮----
// Final recommendations
console.log('\n💡 Recommendations:');
console.log('-------------------');
⋮----
console.log('• Consider code splitting for large chunks');
⋮----
console.log('• Ensure Excalidraw is properly lazy-loaded');
⋮----
if (totalSize > 2097152) { // 2MB
console.log('• Total bundle size is quite large, consider optimization');
⋮----
console.log('• Bundle size looks reasonable');
⋮----
console.log('\n🎯 Bundle analysis complete!');
⋮----
analyzeBundle();
⋮----
console.error('❌ Error analyzing bundle:', error.message);
```

## File: src/components/layout/MainLayout.tsx
```typescript
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth'
import { isPasswordRecoverySession } from '@/lib/auth-utils'
import { SidebarProvider, Sidebar } from '@/components/ui/sidebar'
import { Header } from '@/components/layout/Header'
import { SidebarNav } from '@/components/layout/SidebarNav'
import { ProjectProvider } from '@/contexts/ProjectContext'
import { Toaster } from '@/components/ui/toaster'
import { SettingsMenu } from '@/components/settings/SettingsMenu'
import { ActiveTabProvider } from '@/contexts/ActiveTabContext' // Import ActiveTabProvider
import { GlobalTaskNotificationSystem } from '@/components/tasks/GlobalTaskNotificationSystem'
⋮----
// interface MainLayoutProps {
//   children: React.ReactNode;
// }
⋮----
// Inner component simplified, no longer needs ActiveTabContext
⋮----
// Check if user is authenticated but needs to reset password
⋮----
// If it's the login page, auth callback, or reset password page, render the Outlet directly
⋮----
// Render the main layout structure for both authenticated and non-authenticated users
```

## File: src/components/tasks/EditTemplateDialog.tsx
```typescript
import React from 'react';
import {
  Dialog,
  RgbDialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Trash2 } from 'lucide-react';
import { TemplateTaskInsert, Template as DbTemplate } from '@/lib/supabase/templates'; // Assuming DbTemplate might be useful for context, or remove if not
⋮----
// Task type for editing within the dialog
export type EditableTemplateTask = Omit<TemplateTaskInsert, 'template_id' | 'id' | 'created_at'>;
⋮----
interface EditTemplateDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  rgbBorderEnabled?: boolean;
  templateToEdit: DbTemplate | null; // Pass the whole template or just relevant parts
  editedTemplateName: string;
  onEditedTemplateNameChange: (name: string) => void;
  editedTasks: EditableTemplateTask[];
  onDialogTaskChange: (index: number, field: keyof Pick<EditableTemplateTask, 'task_name' | 'task_duration'>, value: string | number) => void;
  onRemoveDialogTask: (index: number) => void;
  onAddDialogTask: () => void;
  onSave: () => void;
  onCancel: () => void;
}
⋮----
templateToEdit: DbTemplate | null; // Pass the whole template or just relevant parts
⋮----
// templateToEdit, // Not directly used in render if all data is via other props
⋮----
onChange=
⋮----
// Allow empty input for user to clear, handle 0 or invalid as 25 or default on save
⋮----
min="0" // Allow 0, will be defaulted later if needed
```

## File: src/components/timer.tsx
```typescript
import { useState, useEffect, useCallback } from "react";
import { Play, Pause, Timer as TimerIcon, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useSessionLog } from "@/hooks/useSessionLog";
import { TimerSettings } from "./timer-settings";
import { useTimer } from "@/hooks/useTimer";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { BorderContainer } from "@/components/ui/border-container";
⋮----
// Get timer state and controls from context
⋮----
// State for UI elements specific to this component remains
⋮----
// Effect to check initial notification permission status (runs once on mount)
⋮----
}, [addLog]); // Only depends on addLog (stable)
⋮----
// Handler to request notification permission when user clicks the button
⋮----
// Updated handleSaveSettings to use the context function
const handleSaveSettings = (newInterval: number) =>
⋮----
// Animation variants for dynamic transitions
⋮----
// Pause button animation variants
⋮----
// Resume button animation variants
⋮----
// Save button animation variants
⋮----
{/* Main action buttons with animated transitions */}
⋮----
// Single Pause button when running
⋮----
// Split buttons when paused - Resume and Save side by side
⋮----
{/* Separate Reset button - always visible */}
```

## File: src/components/TimerView.tsx
```typescript
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useProjects from '@/hooks/useProjects'
import { Timer } from './timer'
import { SessionLog } from './session-log'
import { TaskList } from './task-list'
import { Button } from '@/components/ui/button'
import { Briefcase } from 'lucide-react'
import { useSettings } from '@/hooks/useSettings'
⋮----
{/* Timer and Session Log Column */}
⋮----
{/* Task List Column */}
```

## File: src/contexts/AuthContext.tsx
```typescript
import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabaseClient';
import { AuthContext, AuthContextProps } from './AuthContextType';
// Import and re-export useAuth for backward compatibility
// import { useAuth } from '@/hooks/useAuth';
// export { useAuth };
⋮----
// Define the props for the provider component
interface AuthProviderProps {
  children: ReactNode;
}
⋮----
// Create the provider component
export const AuthProvider: React.FC<AuthProviderProps> = (
⋮----
const previousUserIdRef = useRef<string | null>(null); // Track previous user ID
⋮----
// Fetch initial session
const initializeAuth = async () =>
⋮----
// Get current session
⋮----
// Set initial values
⋮----
// Only update state if the user ID has changed or session state has changed (login/logout)
⋮----
// Always set loading to false regardless
```

## File: src/contexts/SettingsContext.tsx
```typescript
import { useState, useEffect, ReactNode, useCallback } from 'react';
import { 
    AVAILABLE_SOUNDS, 
    DEFAULT_SOUND, 
    SOUND_STORAGE_KEY, 
    VOLUME_STORAGE_KEY,
    DEFAULT_VOLUME,
    MIN_VOLUME,
    MAX_VOLUME,
    ACCENT_COLOR_STORAGE_KEY, 
    RGB_BORDER_STORAGE_KEY,
    SESSION_LOG_VISIBLE_STORAGE_KEY,
    DEFAULT_ACCENT_COLOR, 
    DEFAULT_RGB_BORDER,
    DEFAULT_SESSION_LOG_VISIBLE,
    ACCENT_COLORS,
    // Import new notification constants
    NOTIFICATION_ENABLED_STORAGE_KEY,
    DEFAULT_NOTIFICATION_ENABLED,
    NOTIFICATION_INTERVAL_STORAGE_KEY,
    DEFAULT_NOTIFICATION_INTERVAL
} from '../lib/constants/settingsConstants';
⋮----
// Import new notification constants
⋮----
import { SettingsContext } from './SettingsContextDef';
⋮----
// State for notification settings
⋮----
// Load settings from localStorage on mount
⋮----
// Sound
⋮----
// Volume
⋮----
// Accent Color
⋮----
// RGB Border
⋮----
// Session Log Visibility
⋮----
// Notification Enabled
⋮----
// Notification Interval
⋮----
// --- Setters with localStorage persistence ---
⋮----
// Apply the color change dynamically by setting the HSL variable
⋮----
// Setters for notification settings
⋮----
// Effect to apply accent color HSL variable on initial load
⋮----
audio.volume = volume; // Apply the current volume setting
⋮----
// Volume Settings
⋮----
// Appearance
⋮----
// RGB Border
⋮----
// Session Log Visibility
⋮----
// Notification Settings
```

## File: src/contexts/SettingsContextDef.tsx
```typescript
import { createContext } from 'react';
⋮----
interface SettingsContextProps {
    isSettingsSheetOpen: boolean;
    openSettingsSheet: () => void;
    closeSettingsSheet: () => void;
    selectedSound: string;
    setSelectedSound: (sound: string) => void;
    availableSounds: string[];
    playSound: (soundUrl: string) => void;
    // Volume Settings
    volume: number;
    setVolume: (volume: number) => void;
    // Appearance Settings
    accentColor: string;
    setAccentColor: (color: string) => void;
    // RGB Border Effect
    rgbBorderEnabled: boolean;
    setRgbBorderEnabled: (enabled: boolean) => void;
    // Session Log Visibility
    sessionLogVisible: boolean;
    setSessionLogVisible: (visible: boolean) => void;

    // Task Notification Settings
    notificationEnabled: boolean;
    setNotificationEnabled: (enabled: boolean) => void;
    notificationInterval: number; // in minutes
    setNotificationInterval: (interval: number) => void;
}
⋮----
// Volume Settings
⋮----
// Appearance Settings
⋮----
// RGB Border Effect
⋮----
// Session Log Visibility
⋮----
// Task Notification Settings
⋮----
notificationInterval: number; // in minutes
```

## File: src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
⋮----
@layer base {
⋮----
:root {
⋮----
/* Light theme (adjust if needed, but primarily focus on dark) */
⋮----
--primary: 173 80% 56%; /* Teal */
⋮----
--accent: 173 80% 56%; /* Teal */
⋮----
--ring: 173 80% 56%; /* Teal */
⋮----
/* Accent Color Definitions (HSL) - Light Theme */
--blue: 220 40% 58%; /* Softer blue */
--green: 140 30% 43%; /* Muted green */
--orange: 25 40% 58%;  /* Less intense orange */
--purple: 260 40% 63%; /* Lighter purple */
--pink: 345 40% 58%;  /* Softer pink */
--white: 0 0% 93%;   /* White remains the same */
⋮----
/* Default Accent Color Variable (overridden by JS) */
--accent-color-hsl: var(--white); /* Store the HSL value */
--accent-color: hsl(var(--accent-color-hsl)); /* Use the HSL value */
⋮----
--header-height: 60px; /* Define a CSS variable for header height */
⋮----
.dark {
⋮----
--background: 222 47% 11%; /* Dark Blue (#1A202C) */
--foreground: 215 20% 65%; /* Light Gray (#A0AEC0) */
--card: 220 30% 16%; /* Slightly Lighter Dark Blue/Gray */
--card-foreground: 215 20% 65%; /* Light Gray (#A0AEC0) */
--popover: 222 47% 11%; /* Dark Blue */
--popover-foreground: 215 20% 65%; /* Light Gray */
--primary: 173 80% 56%; /* Teal (#4FD1C5) */
--primary-foreground: 222 47% 11%; /* Dark Blue for contrast on Teal */
--secondary: 217 33% 27%; /* Dark Gray (#4A5568) */
--secondary-foreground: 210 40% 98%; /* White/Near white */
--muted: 217 33% 27%; /* Dark Gray */
--muted-foreground: 215 20% 65%; /* Light Gray */
--accent: 173 80% 56%; /* Teal (#4FD1C5) */
--accent-foreground: 222 47% 11%; /* Dark Blue */
⋮----
--border: 217 33% 27%; /* Dark Gray */
--input: 217 33% 27%; /* Dark Gray */
⋮----
--chart-1: 173 70% 50%; /* Teal variations */
⋮----
/* Keep sidebar variables consistent with the dark theme */
⋮----
/* Dark Theme Accent Color Definitions (Overrides) */
⋮----
--orange: 25 60% 55%; /* Further reduced saturation, slightly lighter */
⋮----
/* --white: 0 0% 85%; /* Optional: slightly off-white for dark mode if needed */
⋮----
/* Example: --blue: 221.2 83.2% 63.3%; */
/* Ensure --accent-color-hsl is defined here if needed, or it inherits */
/* It should inherit the :root definition fine, but defining it here ensures it if :root changes */
--accent-color-hsl: var(--accent-color-hsl); /* Explicitly inherit/redefine */
⋮----
@property --gradient-angle { /* CSS Houdini for smoother animation */
⋮----
.rgb-pseudo-border {
⋮----
position: relative; /* Needed for absolute positioning of pseudo-element */
overflow: hidden; /* Clip the pseudo-element to the container's radius */
padding: 1px; /* Creates space for the pseudo-border to show. Adjust thickness here. */
/* The border-radius will be applied via inline style in BorderContainer */
z-index: 0; /* Ensure it's behind potentially positioned children if needed */
⋮----
.rgb-pseudo-border::before {
⋮----
inset: 0; /* Cover the entire parent */
/* Apply the same border-radius as the parent */
/* This will be controlled by the parent's style prop */
⋮----
padding: inherit; /* Match parent padding */
⋮----
/* The animated gradient background */
⋮----
#ff0000 /* Repeat start color for smooth loop */
⋮----
z-index: -1; /* Position behind the parent's content */
⋮----
/* Mask to create the border effect (optional but can help) */
/* This creates a hole in the middle */
/* -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; 
            mask-composite: exclude; */
/* Masking can be complex, let's rely on padding for now */
⋮----
/* Add RGB Glow Animation (Subtle Version) */
⋮----
/* Slower cycle, softer colors, smaller/gentler shadow */
/* Reduced blur/spread values and softer theme colors */
⋮----
/* Add class to apply the animation */
.rgb-glow-effect {
⋮----
/* Slower duration (e.g., 8s) */
⋮----
* {
⋮----
@apply border-border;
⋮----
body {
⋮----
/* Accent Color Utility Classes */
@layer utilities {
⋮----
.accent-text {
.accent-bg {
⋮----
/* Ensure sufficient contrast for text on accent backgrounds */
/* You might need a dedicated --accent-foreground variable */
/* color: hsl(var(--accent-foreground, var(--primary-foreground))); */
⋮----
.accent-border {
⋮----
/* Apply accent color to Shadcn UI primary elements (adjust as needed) */
.bg-primary {
.text-primary {
.border-primary {
.ring-primary {
/* Example for RadioGroup checked state */
/* .dark [data-state=checked],
  [data-state=checked] {
      background-color: hsl(var(--accent-color-hsl));
      border-color: hsl(var(--accent-color-hsl));
  } */
```

## File: src/lib/auth-utils.ts
```typescript
import { supabase } from './supabaseClient'
⋮----
// Constants for session storage keys
⋮----
const RECOVERY_SESSION_TIMEOUT = 30 * 60 * 1000 // 30 minutes
⋮----
/**
 * Send a password reset email to the specified email address
 * @param email - The email address to send the reset link to
 * @returns Promise with result of the operation
 */
export async function sendPasswordResetEmail(email: string)
⋮----
/**
 * Mark the current session as a password recovery session
 */
export function markPasswordRecoverySession()
⋮----
/**
 * Check if the current session is a password recovery session
 * @returns boolean indicating if this is a recovery session
 */
export function isPasswordRecoverySession(): boolean
⋮----
// Check if the recovery session has expired
⋮----
/**
 * Clear the password recovery session flag
 */
export function clearPasswordRecoverySession()
⋮----
/**
 * Check if the current user session is authenticated but needs password reset
 * @returns boolean indicating if user is authenticated but in recovery mode
 */
export async function isAuthenticatedButNeedsPasswordReset(): Promise<boolean>
⋮----
/**
 * Get the appropriate redirect URL for the current environment
 * @returns The redirect URL for auth callbacks
 */
export function getAuthRedirectUrl()
⋮----
// Fallback for SSR environments
⋮----
/**
 * Get the password reset redirect URL for the current environment
 * @returns The redirect URL for password reset flows
 */
export function getPasswordResetRedirectUrl()
⋮----
// Fallback for SSR environments
```

## File: src/lib/constants/settingsConstants.ts
```typescript
// Volume Settings
⋮----
export const DEFAULT_VOLUME = 0.7; // Default to 70% volume
⋮----
// Notification Settings
⋮----
export const DEFAULT_NOTIFICATION_ENABLED = false; // Default to off
⋮----
export const DEFAULT_NOTIFICATION_INTERVAL = 30; // Default to 30 minutes
```

## File: src/lib/supabase/userFeatures.ts
```typescript
// src/lib/supabase/userFeatures.ts
import { supabase } from '../supabaseClient';
⋮----
/**
 * Check if a user has access to a specific feature
 * @param userId The user ID to check
 * @param featureName The name of the feature to check
 * @returns A boolean indicating if the user has access to the feature
 */
export async function checkUserFeatureAccess(
  userId: string,
  featureName: string
): Promise<boolean>
⋮----
/**
 * Get all features a user has access to
 * @param userId The user ID to check
 * @returns An array of feature names the user has access to
 */
export async function getUserFeatures(userId: string): Promise<string[]>
⋮----
/**
 * Grant a feature to a user (requires admin privileges)
 * @param userId The user ID to grant the feature to
 * @param featureName The name of the feature to grant
 * @returns A boolean indicating if the operation was successful
 */
export async function grantUserFeature(
  userId: string,
  featureName: string
): Promise<boolean>
⋮----
/**
 * Revoke a feature from a user (requires admin privileges)
 * @param userId The user ID to revoke the feature from
 * @param featureName The name of the feature to revoke
 * @returns A boolean indicating if the operation was successful
 */
export async function revokeUserFeature(
  userId: string,
  featureName: string
): Promise<boolean>
```

## File: src/lib/types/task.ts
```typescript
export interface Reminder {
  type: 'day_before' | 'hour_before' | 'on_due_date' | 'custom' | 'none';
  time?: string | null; // e.g., "09:00"
}
⋮----
time?: string | null; // e.g., "09:00"
⋮----
export interface UITask {
  id: string;
  project_id: string;
  text: string;
  completed: boolean;
  duration: number;
  priority: number;
  due_date: string | null;
  reminder: Reminder | null;
  description: string;
  notes: string;
  parent_task_id: string | null;
  order: number;
}
⋮----
// This type is used for tasks within a template, before they become actual UITasks
export interface TemplateTask {
  task_name: string;
  task_duration: number;
  order: number;
}
```

## File: src/pages/LoginPage.tsx
```typescript
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../hooks/useAuth'
import { useEffect, useCallback, useMemo, useState } from 'react' // Import useCallback, useMemo, and useState
import { useNavigate, useLocation } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { BorderContainer } from '@/components/ui/border-container';
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Import initParticlesEngine
import type { Container, Engine } from "@tsparticles/engine"; // Import Engine type
import { loadSlim } from "@tsparticles/slim"; // Keep loadSlim
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask"; // Correct import path
import AnimatedWave from '@/components/ui/AnimatedWave';
⋮----
// --- Start Particle Effect Setup ---
⋮----
// this should be run only once per application lifetime
⋮----
// Pass the Engine type to initParticlesEngine
⋮----
// Load the slim engine (can co-exist with full engine features loaded by plugins)
⋮----
// Load the polygon mask plugin
⋮----
// Keep background transparent or match theme
⋮----
onHover: { enable: false, mode: "bubble" }, // Temporarily disable hover
⋮----
enable: false, // Links often look cluttered with polygon masks
⋮----
enable: true, // Ensure base movement is enabled
outModes: { default: "bounce" as const }, // Keep particles bouncing within the mask
random: true, // Allow some randomness within the mask
speed: 0.3, // Keep speed low
⋮----
area: 800 // Adjust density as needed
⋮----
value: 60, // Slightly reduced particle count
⋮----
type: "circle", // Particles themselves are still circles
⋮----
// --- Polygon Mask Configuration ---
⋮----
type: "inline" as const, // Switch back to inline
url: "/img/logo_outline.svg", // Comment out external URL
scale: 2, // Reset scale for basic shape
⋮----
type: "radius" as const, // Keep simple move type
⋮----
// --- End Polygon Mask Configuration ---
⋮----
// --- End Particle Effect Setup ---
⋮----
// Redirect logged-in users away from the login page
⋮----
// Only redirect if auth is not loading AND a session exists AND we're actually on the login page
⋮----
navigate('/') // Use navigate
⋮----
// Show loading indicator while checking auth state initially OR if session is potentially being processed
if (authLoading || !init) { // Also wait for particles engine to init
⋮----
// If still no session after loading, show the login form
if (!session && init) { // Ensure particles engine is initialized
// Construct the redirect URL for Vite
const getRedirectUrl = () =>
⋮----
// Fallback for SSR or environments where window is not defined (less common in basic Vite client-side apps)
// Use Vite env variables if needed: import.meta.env.VITE_SITE_URL
// This basic version assumes client-side rendering.
⋮----
<div className="relative flex items-center justify-center min-h-screen bg-background overflow-hidden"> {/* Added overflow-hidden */}
{/* Animated Wave Background - Positioned behind particles */}
<AnimatedWave className="opacity-30" /> {/* Lower opacity */}
⋮----
{/* Particle Background - Positioned behind login card */}
⋮----
particlesLoaded={particlesLoaded} // Correct prop name
⋮----
className="absolute inset-0 z-0" // Keep particles at z-index 0
⋮----
{/* Login Card - Positioned on top */}
<div className="relative z-10"> {/* Ensure login card is above particles and wave */}
⋮----
forceEnable // Always show border on login page
⋮----
// variables: { default: { colors: { brand: 'hsl(var(--primary))', brandAccent: 'hsl(var(--primary-foreground))' }}}
⋮----
theme="dark" // Match app theme
⋮----
} // Added missing closing brace here
⋮----
// If session exists (and not loading), this component should ideally not render anything
// or return null, letting the router handle the redirect based on MainLayout or other routes.
// Returning null here might be safer if the redirect logic is handled elsewhere primarily.
```

## File: src/utils/errorUtils.ts
```typescript
export function formatErrorMessage(error: unknown): string
⋮----
// Fallback for other types of errors that might have a toString method
```

## File: src/vite-env.d.ts
```typescript
/// <reference types="vite/client" />
⋮----
interface Window {
    EXCALIDRAW_ASSET_PATH: string;
  }
```

## File: vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import path from "path"
import { fileURLToPath } from 'url';
⋮----
// Get current directory name using import.meta.url
⋮----
// https://vite.dev/config/
⋮----
// Enable tree-shaking and optimize chunks
⋮----
// Split vendor libraries into separate chunks for better caching
⋮----
// Core React libraries
⋮----
// UI libraries
⋮----
// Data fetching and state management
⋮----
// Chart and visualization libraries (but not Excalidraw - that's lazy loaded)
⋮----
// Animation libraries
⋮----
// Log chunk sizes to monitor bundle size
⋮----
// Set chunk size warning limit (500kb)
⋮----
// Report compressed size
⋮----
// Minify for production
⋮----
// Remove console.log statements in production
⋮----
// Optimize dependencies for better tree-shaking
⋮----
// Include Excalidraw for optimization to handle its CommonJS dependencies
⋮----
// Force optimization to ensure CommonJS modules are properly handled
⋮----
// Define global variables for module compatibility
```

## File: index.html
```html
<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/img/logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kair0s | Jezz.WTF</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## File: scripts/grant-admin-access.cjs
```
// scripts/grant-admin-access.cjs
require('dotenv').config();
⋮----
// Initialize Supabase client
⋮----
console.error('Error: Missing Supabase environment variables.');
console.error('Please ensure VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set.');
process.exit(1);
⋮----
const supabase = createClient(supabaseUrl, supabaseServiceKey);
⋮----
async function grantAdminAccess(userId) {
⋮----
console.error('Error: User ID is required.');
⋮----
// Insert or update a record in the user_features table
⋮----
.from('user_features')
.upsert({
⋮----
console.error('Error granting admin access:', error.message);
⋮----
console.log(`Successfully granted admin access to user: ${userId}`);
⋮----
throw error; // Let the top-level catch handle the error
⋮----
// Get user ID from command line arguments
⋮----
console.error('Usage: node grant-admin-access.cjs <user-id>');
⋮----
grantAdminAccess(userId)
.then(() => process.exit(0))
.catch((e) => {
console.error('Unexpected error:', e);
```

## File: scripts/write-version.cjs
```
fs.writeFileSync('dist/version.txt', pkg.version);
//fs.writeFileSync('dist/version.json', JSON.stringify({ version: pkg.version }, null, 2)); // version in JSON format, if needed (<== possible Repomon changes)
```

## File: src/components/tasks/TaskListSkeleton.tsx
```typescript
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { BorderContainer } from '@/components/ui/border-container';
⋮----
const SkeletonBar = ({ className }: { className?: string }) => (
  <div className={`bg-muted animate-pulse rounded ${className}`} />
);
⋮----
const TaskItemSkeleton = () => (
  <div className="p-3 my-1.5 rounded-md bg-muted/50">
    <div className="flex items-center justify-between">
      <SkeletonBar className="h-4 w-3/4" />
      <SkeletonBar className="h-4 w-8" />
    </div>
    <SkeletonBar className="h-3 w-1/2 mt-2" />
  </div>
);
⋮----
export const TaskListSkeleton = () =>
⋮----
{/* Title and Stats Placeholder */}
⋮----
{/* Progress Bar Placeholder */}
⋮----
{/* Search Input Placeholder */}
⋮----
{/* Template Actions & Estimate Finish Placeholder */}
⋮----
{/* TaskInput Placeholder */}
⋮----
{/* Simulate a few task items */}
```

## File: src/lib/logger.ts
```typescript
// Basic logger utility
⋮----
// For now, we'll keep it simple and allow all logs.
// In the future, we could make this configurable, e.g., based on an environment variable.
⋮----
interface Logger {
  log: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  info: (...args: unknown[]) => void;
  debug: (...args: unknown[]) => void;
}
⋮----
// In a production environment, we might want to suppress info logs
// or send them to a different service.
// if (!IS_PRODUCTION) {
⋮----
// }
⋮----
// Debug logs should typically be disabled in production.
```

## File: src/lib/types/excalidraw-types.ts
```typescript
// This file contains type declarations for Excalidraw components
// Using safer type definitions instead of broad 'any' types
⋮----
// Imperative API for Excalidraw component
export interface ExcalidrawImperativeAPI {
  updateScene: (sceneData: unknown) => void;
  addFiles: (files: unknown) => void;
  ready: boolean;
  id: string;
}
⋮----
// Excalidraw element with basic structure
export interface ExcalidrawElement {
  id: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;
  strokeColor: string;
  backgroundColor: string;
  fillStyle: string;
  strokeWidth: number;
  strokeStyle: string;
  roughness: number;
  opacity: number;
  [key: string]: unknown; // Allow additional properties
}
⋮----
[key: string]: unknown; // Allow additional properties
⋮----
// App state with common Excalidraw properties
export interface AppState {
  viewBackgroundColor: string;
  currentItemStrokeColor: string;
  currentItemBackgroundColor: string;
  cursorButton: string;
  scrollX: number;
  scrollY: number;
  zoom: {
    value: number;
  };
  currentItemFillStyle: string;
  currentItemStrokeWidth: number;
  currentItemRoughness: number;
  currentItemOpacity: number;
  [key: string]: unknown; // Allow additional properties
}
⋮----
[key: string]: unknown; // Allow additional properties
⋮----
// Binary files type
export type BinaryFiles = Record<string, {
  id: string;
  created: number;
  dataURL: string;
  mimeType: string;
}>;
⋮----
export interface WhiteboardDataFromSupabase {
  elements: ExcalidrawElement[];
  appState?: Partial<AppState>;
  files?: BinaryFiles;
}
```

## File: src/lib/utils/debounce.ts
```typescript
/**
 * Debounces a function, delaying its execution until after a specified wait time
 * has elapsed since the last time it was invoked.
 *
 * @param func The function to debounce.
 * @param waitFor The number of milliseconds to delay.
 * @returns A debounced version of the function.
 */
export function debounce<F extends (...args: unknown[]) => unknown>(
  func: F, 
  waitFor: number
):
⋮----
const debounced = (...args: Parameters<F>): void =>
⋮----
const cancel = (): void =>
⋮----
timeoutId = null; // Reset timeoutId after cancelling
```

## File: src/pages/ResetPasswordPage.tsx
```typescript
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { BorderContainer } from '@/components/ui/border-container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, AlertCircle, CheckCircle2 } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { isPasswordRecoverySession, clearPasswordRecoverySession } from '../lib/auth-utils'
import AnimatedWave from '@/components/ui/AnimatedWave'
import Particles, { initParticlesEngine } from "@tsparticles/react"
import type { Container, Engine } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask"
⋮----
// Initialize particles engine
⋮----
// Add some debugging for the initial render
⋮----
// Check for auth state change and session validity
⋮----
const checkSession = async () =>
⋮----
// Check URL parameters for error messages first
⋮----
// Check if we have a valid session for password recovery
⋮----
// Wait longer for the session to potentially load, but use a ref-based approach
⋮----
// Re-check the current session state, don't rely on closure
⋮----
}, 5000) // Increased timeout to 5 seconds
⋮----
// Cleanup function to clear timeout
⋮----
// Listen for auth state changes
⋮----
// For password recovery, SIGNED_IN might be fired after PASSWORD_RECOVERY
// Check if this is a recovery session by looking for recovery-related claims
⋮----
// If we don't have a valid session yet, this might be the recovery session
⋮----
// Token refresh during password recovery should maintain valid session
⋮----
const handleSubmit = async (e: React.FormEvent) =>
⋮----
// Clear the password recovery session flag since password was successfully changed
⋮----
// Redirect to login page after successful password reset
⋮----
const handleBackToLogin = () =>
⋮----
// If this is a password recovery session, prevent navigation and show warning
⋮----
// Show loading state while checking session
⋮----
{/* Animated Wave Background */}
⋮----
{/* Particle Background */}
⋮----
// Show error state for invalid sessions
⋮----
{/* Animated Wave Background */}
⋮----
{/* Particle Background */}
⋮----
// Show success state
⋮----
{/* Animated Wave Background */}
⋮----
{/* Particle Background */}
⋮----
// Ensure recovery session is cleared before navigation
⋮----
// Show the password reset form
⋮----
{/* Animated Wave Background */}
⋮----
{/* Particle Background */}
```

## File: src/pages/SettingsPage.tsx
```typescript
import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { NotificationSettings } from '@/components/settings/NotificationSettings';
import { AccountSettings } from '@/components/settings/AccountSettings';
import { FeatureAccessSettings } from '@/components/settings/FeatureAccessSettings';
import { useFeatureAccess } from '@/hooks/useFeatureAccess';
⋮----
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
⋮----
const handleChange = (_: React.SyntheticEvent, newValue: number) =>
```

## File: src/utils/task-utils.tsx
```typescript
import React from 'react';
import { Flag, AlertTriangle, AlertOctagon } from 'lucide-react';
import { cn } from '@/lib/utils';
```

## File: supabase/.gitignore
```
# Supabase
.branches
.temp

# dotenvx
.env.keys
.env.local
.env.*.local
```

## File: supabase/migrations/20250522195408_create_whiteboards_table.sql
```sql
CREATE TABLE public.whiteboards (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id uuid NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    whiteboard_data jsonb NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Add comments to the table and columns for clarity
COMMENT ON TABLE public.whiteboards IS 'Stores whiteboard data associated with projects.';
COMMENT ON COLUMN public.whiteboards.id IS 'Unique identifier for the whiteboard.';
COMMENT ON COLUMN public.whiteboards.project_id IS 'Foreign key to the project this whiteboard belongs to.';
COMMENT ON COLUMN public.whiteboards.user_id IS 'Foreign key to the user who owns/created this whiteboard.';
COMMENT ON COLUMN public.whiteboards.whiteboard_data IS 'JSONB data representing the Excalidraw scene.';
COMMENT ON COLUMN public.whiteboards.created_at IS 'Timestamp of when the whiteboard was created.';
COMMENT ON COLUMN public.whiteboards.updated_at IS 'Timestamp of when the whiteboard was last updated.';

-- Enable Row Level Security for the whiteboards table
ALTER TABLE public.whiteboards ENABLE ROW LEVEL SECURITY;
-- (Further RLS policies would be defined based on application access patterns)

-- Create a trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_whiteboard_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = now();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_whiteboards_updated_at
  BEFORE UPDATE
  ON public.whiteboards
  FOR EACH ROW
  EXECUTE FUNCTION public.update_whiteboard_updated_at_column();
```

## File: supabase/migrations/20250524120000_add_rls_to_whiteboards.sql
```sql
-- Add Row Level Security to whiteboards table
ALTER TABLE public.whiteboards ENABLE ROW LEVEL SECURITY;

-- Add policies to control access
-- Users can only view, insert, update, and delete their own whiteboards
CREATE POLICY "Users can view their own whiteboards" 
ON public.whiteboards 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own whiteboards" 
ON public.whiteboards 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own whiteboards" 
ON public.whiteboards 
FOR UPDATE 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own whiteboards" 
ON public.whiteboards 
FOR DELETE 
USING (auth.uid() = user_id);

-- Add an index to improve query performance
CREATE INDEX idx_whiteboards_project_user ON public.whiteboards(project_id, user_id);
```

## File: test-edge-function.js
```javascript
// test-edge-function.ts
⋮----
// --- Supabase Client Initialization for Node.js Test Environment ---
// IMPORTANT: These environment variables would need to be set in the
// execution environment for this script to connect to a real Supabase project.
// For this test, we'll use placeholder values. The test will demonstrate
// the invocation pattern but won't make a live call without actual credentials.
⋮----
console.warn('Using placeholder Supabase URL and Anon Key. ' +
⋮----
// Create a mock Supabase client if actual credentials are not provided
⋮----
invoke: async (functionName, options) => {
console.log(`Mock invoke of function: ${functionName} with options:`, options);
// Simulate a successful response structure for 'site-search'
⋮----
data: { error: 'searchTerm and userId are required.' }, // Simulating error payload from function
error: { message: 'Function error: Missing parameters', status: 400 }, // Simulating Supabase Functions error object
status: 400, // This is a made up status for the mock
⋮----
status: 200, // Simulate HTTP status from function invocation
⋮----
}; // Type assertion for mock
⋮----
supabase = createClient(supabaseUrl, supabaseAnonKey);
⋮----
async function testSiteSearchFunction() {
⋮----
console.log(`Attempting to invoke 'site-search' with searchTerm: "${testSearchTerm}", userId: "${testUserId}"`);
// Explicitly type the expected response structure for invoke
const { data, error } = await supabase.functions.invoke('site-search', // Function name
⋮----
console.log("\n--- Edge Function Invocation Response ---");
⋮----
console.error('Error invoking function:', error);
console.error('Error Status:', error.status || 'N/A'); // SupabaseError might have status
console.error('Error Message:', error.message);
⋮----
console.log('Function invoked successfully. Response data:');
console.log(JSON.stringify(data, null, 2));
// Verify response structure
⋮----
console.warn("\n--- Verification Failed: Function returned an error payload ---");
console.warn(`Error from function: ${data.error}`);
⋮----
else if (data && Array.isArray(data)) {
console.log("\n--- Verification Results ---");
console.log(`Response data is an array: Yes (length: ${data.length})`);
⋮----
const firstItem = data[0]; // Cast to SiteSearchResult
console.log("First item structure check:");
⋮----
const hasDescription = 'description' in firstItem ? typeof firstItem.description === 'string' : true; // Optional
const hasUrl = 'url' in firstItem ? typeof firstItem.url === 'string' : true; // Optional
console.log(`  - Has 'id' (string): ${hasId}`);
console.log(`  - Has 'type' (string): ${hasType}`);
console.log(`  - Has 'title' (string): ${hasTitle}`);
console.log(`  - Has 'description' (string, optional): ${hasDescription}`);
console.log(`  - Has 'url' (string, optional): ${hasUrl}`);
⋮----
console.log("First item structure matches SiteSearchResult: Yes");
⋮----
console.error("First item structure matches SiteSearchResult: No");
⋮----
console.log("Response array is empty. No items to check structure against.");
⋮----
console.log("--- End of Verification ---");
⋮----
console.error("\n--- Verification Failed ---");
console.error("Response data is not an array and not an error object:", data);
console.error("--- End of Verification ---");
⋮----
testSiteSearchFunction().catch(e => {
console.error("Unhandled error during test execution:", e);
```

## File: src/components/layout/AuthButton.tsx
```typescript
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { LogIn, LogOut, User } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useSidebar } from "@/hooks/use-sidebar"
import { cn } from "@/lib/utils"
import { useUserProfile } from '@/hooks/useUserProfile';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
⋮----
// Base classes
⋮----
const buttonBaseClasses = "w-full justify-start gap-2 py-2"; // No px here, relies on parent
⋮----
// Collapsed overrides
⋮----
const handleLogin = () =>
⋮----
const handleLogout = async () =>
⋮----
// Clear notifications from local storage regardless of signOut success/failure
⋮----
// Dispatch an event to notify the NotificationPanel to update
```

## File: src/components/settings/SettingsMenu.tsx
```typescript
import { useState, useEffect, useCallback } from 'react';
import { useSettings } from '@/hooks/useSettings';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter,
    SheetClose
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Play, Volume2 } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { ACCENT_COLORS } from '@/lib/constants/settingsConstants';
import { Separator } from "@/components/ui/separator";
import { toast } from '@/hooks/use-toast';
⋮----
// Volume Settings
⋮----
// Appearance
⋮----
// RGB Border
⋮----
// Session Log Visibility
⋮----
// Notification settings
⋮----
const handleSoundChange = (value: string) =>
⋮----
const playTestSound = (sound: string) =>
⋮----
const handleVolumeChange = (value: number[]) =>
⋮----
const handleVolumeTest = () =>
⋮----
// Function to format sound names for display
const formatSoundName = (filename: string) =>
⋮----
.replace(/\.mp3$/i, '') // Remove .mp3 extension
.replace(/[_-]/g, ' ') // Replace underscores/hyphens with spaces
.replace(/\b\w/g, l => l.toUpperCase()); // Capitalize each word
⋮----
setCurrentAccent(value); // Update local state immediately for visual feedback
setAccentColor(value); // Propagate to context
⋮----
const handleNotificationEnabledChange = (checked: boolean) =>
⋮----

⋮----
{/* Volume Control Section */}
⋮----
{/* Global Notifications Toggle Section */}
⋮----
{/* Appearance Settings */}
⋮----
style={{ backgroundColor: `hsl(var(--${color.value}))` }} // Use CSS var for preview
⋮----
{/* RGB Border Toggle */}
⋮----
{/* Developer Section */}
```

## File: src/components/Whiteboard.css
```css
.excalidraw-wrapper {
⋮----
/* Ensure the Excalidraw container has proper dimensions */
.excalidraw {
⋮----
/* Fix for the lock icon issue */
.zen-mode-transition {
⋮----
/* Loading screen styles */
.whiteboard-loading-container {
⋮----
.whiteboard-loading-content {
⋮----
.whiteboard-loading-spinner {
⋮----
.whiteboard-loading-text {
⋮----
.whiteboard-loading-subtext {
```

## File: src/hooks/useUserProfile.ts
```typescript
import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
⋮----
interface UserProfile {
  username: string | null;
  website: string | null;
  avatar_url: string | null;
}
⋮----
export function useUserProfile()
⋮----
// Memoize the downloadImage function to prevent unnecessary re-renders
⋮----
async function getProfile()
⋮----
// Download avatar image if avatar_url exists
⋮----
// Clean up object URL when avatarImageUrl changes
```

## File: src/lib/utils.ts
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
⋮----
export function cn(...inputs: ClassValue[])
⋮----
/**
 * Formats time in seconds into HH:MM:SS format.
 * @param totalSeconds - The total time in seconds.
 * @returns A string representing the time in HH:MM:SS format.
 */
export function formatTime(totalSeconds: number): string
⋮----
export const debounce = <A extends unknown[], R>(
  func: (...args: A) => R,
  waitFor: number
): ((...args: A) => void) &
⋮----
const debounced = (...args: A): void =>
⋮----
// We assign the `cancel` method to the debounced function and return it.
// Using Object.assign here allows TypeScript to correctly infer the final type.
```

## File: src/pages/AuthCallbackPage.tsx
```typescript
import { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { markPasswordRecoverySession } from '../lib/auth-utils';
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { BorderContainer } from '@/components/ui/border-container';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AnimatedWave from '@/components/ui/AnimatedWave';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
⋮----
// Initialize particles engine
⋮----
// Add debugging for initial render
⋮----
// Check for errors in URL hash first
⋮----
const hashParams = new URLSearchParams(urlHash.substring(1)); // Remove # from hash
⋮----
// Check if this is a password recovery flow
⋮----
// Mark this as a password recovery session
⋮----
// Use setTimeout to ensure the redirect happens after the current render cycle
⋮----
return; // Exit early for password recovery - no cleanup needed
}    // Handle other auth callback flows
⋮----
const handleAuthCallback = async () =>
⋮----
try {        // Listen for auth state changes to determine the flow
⋮----
// Fallback: if no specific event is detected within 3 seconds, redirect to home
⋮----
// Call the async function
⋮----
// Return cleanup function
⋮----
// Show error state if there's an error
⋮----
{/* Animated Wave Background */}
⋮----
{/* Particle Background */}
⋮----
{/* Error Card */}
⋮----
{/* Animated Wave Background */}
⋮----
{/* Particle Background */}
⋮----
{/* Loading Card */}
```

## File: src/pages/WhiteboardPage.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WhiteboardView from '@/components/WhiteboardView';
import { useAuth } from '@/hooks/useAuth';
import { useFeatureAccess } from '@/hooks/useFeatureAccess';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
⋮----
const checkFeatureAccess = async () =>
```

## File: src/pages/WhiteboardTestPage.tsx
```typescript
import React, { useState, useEffect } from 'react';
import WhiteboardView from '@/components/WhiteboardView';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { checkUserFeatureAccess } from '@/lib/supabase/userFeatures';
import { AlertTriangle } from 'lucide-react';
⋮----
// Use valid UUIDs for testing
⋮----
const checkAccess = async () =>
⋮----
const handleReset = () =>
⋮----
{/* Using key to force complete remount when testId changes */}
```

## File: supabase/config.toml
```toml
# For detailed configuration reference documentation, visit:
# https://supabase.com/docs/guides/local-development/cli/config
# A string used to distinguish different Supabase projects on the same host. Defaults to the
# working directory name when running `supabase init`.
project_id = "timer"

[api]
enabled = true
# Port to use for the API URL.
port = 54321
# Schemas to expose in your API. Tables, views and stored procedures in this schema will get API
# endpoints. `public` and `graphql_public` schemas are included by default.
schemas = ["public", "graphql_public"]
# Extra schemas to add to the search_path of every request.
extra_search_path = ["public", "extensions"]
# The maximum number of rows returns from a view, table, or stored procedure. Limits payload size
# for accidental or malicious requests.
max_rows = 1000

[api.tls]
# Enable HTTPS endpoints locally using a self-signed certificate.
enabled = false

[db]
# Port to use for the local database URL.
port = 54322
# Port used by db diff command to initialize the shadow database.
shadow_port = 54320
# The database major version to use. This has to be the same as your remote database's. Run `SHOW
# server_version;` on the remote database to check.
major_version = 15

[db.pooler]
enabled = false
# Port to use for the local connection pooler.
port = 54329
# Specifies when a server connection can be reused by other clients.
# Configure one of the supported pooler modes: `transaction`, `session`.
pool_mode = "transaction"
# How many server connections to allow per user/database pair.
default_pool_size = 20
# Maximum number of client connections allowed.
max_client_conn = 100

# [db.vault]
# secret_key = "env(SECRET_VALUE)"

[db.migrations]
# Specifies an ordered list of schema files that describe your database.
# Supports glob patterns relative to supabase directory: "./schemas/*.sql"
schema_paths = []

[db.seed]
# If enabled, seeds the database after migrations during a db reset.
enabled = true
# Specifies an ordered list of seed files to load during db reset.
# Supports glob patterns relative to supabase directory: "./seeds/*.sql"
sql_paths = ["./seed.sql"]

[realtime]
enabled = true
# Bind realtime via either IPv4 or IPv6. (default: IPv4)
# ip_version = "IPv6"
# The maximum length in bytes of HTTP request headers. (default: 4096)
# max_header_length = 4096

[studio]
enabled = true
# Port to use for Supabase Studio.
port = 54323
# External URL of the API server that frontend connects to.
api_url = "http://127.0.0.1"
# OpenAI API Key to use for Supabase AI in the Supabase Studio.
openai_api_key = "env(OPENAI_API_KEY)"

# Email testing server. Emails sent with the local dev setup are not actually sent - rather, they
# are monitored, and you can view the emails that would have been sent from the web interface.
[inbucket]
enabled = true
# Port to use for the email testing server web interface.
port = 54324
# Uncomment to expose additional ports for testing user applications that send emails.
# smtp_port = 54325
# pop3_port = 54326
# admin_email = "admin@email.com"
# sender_name = "Admin"

[storage]
enabled = true
# The maximum file size allowed (e.g. "5MB", "500KB").
file_size_limit = "50MiB"

# Image transformation API is available to Supabase Pro plan.
# [storage.image_transformation]
# enabled = true

# Uncomment to configure local storage buckets
# [storage.buckets.images]
# public = false
# file_size_limit = "50MiB"
# allowed_mime_types = ["image/png", "image/jpeg"]
# objects_path = "./images"

[auth]
enabled = true
# The base URL of your website. Used as an allow-list for redirects and for constructing URLs used
# in emails.
site_url = "http://127.0.0.1:5173"
# A list of *exact* URLs that auth providers are permitted to redirect to post authentication.
additional_redirect_urls = ["https://127.0.0.1:5173", "http://127.0.0.1:5173/reset-password", "https://127.0.0.1:5173/reset-password"]
# How long tokens are valid for, in seconds. Defaults to 3600 (1 hour), maximum 604,800 (1 week).
jwt_expiry = 3600
# If disabled, the refresh token will never expire.
enable_refresh_token_rotation = true
# Allows refresh tokens to be reused after expiry, up to the specified interval in seconds.
# Requires enable_refresh_token_rotation = true.
refresh_token_reuse_interval = 10
# Allow/disallow new user signups to your project.
enable_signup = true
# Allow/disallow anonymous sign-ins to your project.
enable_anonymous_sign_ins = false
# Allow/disallow testing manual linking of accounts
enable_manual_linking = false
# Passwords shorter than this value will be rejected as weak. Minimum 6, recommended 8 or more.
minimum_password_length = 6
# Passwords that do not meet the following requirements will be rejected as weak. Supported values
# are: `letters_digits`, `lower_upper_letters_digits`, `lower_upper_letters_digits_symbols`
password_requirements = ""

[auth.rate_limit]
# Number of emails that can be sent per hour. Requires auth.email.smtp to be enabled.
email_sent = 2
# Number of SMS messages that can be sent per hour. Requires auth.sms to be enabled.
sms_sent = 30
# Number of anonymous sign-ins that can be made per hour per IP address. Requires enable_anonymous_sign_ins = true.
anonymous_users = 30
# Number of sessions that can be refreshed in a 5 minute interval per IP address.
token_refresh = 150
# Number of sign up and sign-in requests that can be made in a 5 minute interval per IP address (excludes anonymous users).
sign_in_sign_ups = 30
# Number of OTP / Magic link verifications that can be made in a 5 minute interval per IP address.
token_verifications = 30

# Configure one of the supported captcha providers: `hcaptcha`, `turnstile`.
# [auth.captcha]
# enabled = true
# provider = "hcaptcha"
# secret = ""

[auth.email]
# Allow/disallow new user signups via email to your project.
enable_signup = true
# If enabled, a user will be required to confirm any email change on both the old, and new email
# addresses. If disabled, only the new email is required to confirm.
double_confirm_changes = true
# If enabled, users need to confirm their email address before signing in.
enable_confirmations = false
# If enabled, users will need to reauthenticate or have logged in recently to change their password.
secure_password_change = false
# Controls the minimum amount of time that must pass before sending another signup confirmation or password reset email.
max_frequency = "1s"
# Number of characters used in the email OTP.
otp_length = 6
# Number of seconds before the email OTP expires (defaults to 1 hour).
otp_expiry = 3600

# Use a production-ready SMTP server
# [auth.email.smtp]
# enabled = true
# host = "smtp.sendgrid.net"
# port = 587
# user = "apikey"
# pass = "env(SENDGRID_API_KEY)"
# admin_email = "admin@email.com"
# sender_name = "Admin"

# Uncomment to customize email template
# [auth.email.template.invite]
# subject = "You have been invited"
# content_path = "./supabase/templates/invite.html"

[auth.sms]
# Allow/disallow new user signups via SMS to your project.
enable_signup = false
# If enabled, users need to confirm their phone number before signing in.
enable_confirmations = false
# Template for sending OTP to users
template = "Your code is {{ .Code }}"
# Controls the minimum amount of time that must pass before sending another sms otp.
max_frequency = "5s"

# Use pre-defined map of phone number to OTP for testing.
# [auth.sms.test_otp]
# 4152127777 = "123456"

# Configure logged in session timeouts.
# [auth.sessions]
# Force log out after the specified duration.
# timebox = "24h"
# Force log out if the user has been inactive longer than the specified duration.
# inactivity_timeout = "8h"

# This hook runs before a token is issued and allows you to add additional claims based on the authentication method used.
# [auth.hook.custom_access_token]
# enabled = true
# uri = "pg-functions://<database>/<schema>/<hook_name>"

# Configure one of the supported SMS providers: `twilio`, `twilio_verify`, `messagebird`, `textlocal`, `vonage`.
[auth.sms.twilio]
enabled = false
account_sid = ""
message_service_sid = ""
# DO NOT commit your Twilio auth token to git. Use environment variable substitution instead:
auth_token = "env(SUPABASE_AUTH_SMS_TWILIO_AUTH_TOKEN)"

# Multi-factor-authentication is available to Supabase Pro plan.
[auth.mfa]
# Control how many MFA factors can be enrolled at once per user.
max_enrolled_factors = 10

# Control MFA via App Authenticator (TOTP)
[auth.mfa.totp]
enroll_enabled = false
verify_enabled = false

# Configure MFA via Phone Messaging
[auth.mfa.phone]
enroll_enabled = false
verify_enabled = false
otp_length = 6
template = "Your code is {{ .Code }}"
max_frequency = "5s"

# Configure MFA via WebAuthn
# [auth.mfa.web_authn]
# enroll_enabled = true
# verify_enabled = true

# Use an external OAuth provider. The full list of providers are: `apple`, `azure`, `bitbucket`,
# `discord`, `facebook`, `github`, `gitlab`, `google`, `keycloak`, `linkedin_oidc`, `notion`, `twitch`,
# `twitter`, `slack`, `spotify`, `workos`, `zoom`.
[auth.external.apple]
enabled = false
client_id = ""
# DO NOT commit your OAuth provider secret to git. Use environment variable substitution instead:
secret = "env(SUPABASE_AUTH_EXTERNAL_APPLE_SECRET)"
# Overrides the default auth redirectUrl.
redirect_uri = ""
# Overrides the default auth provider URL. Used to support self-hosted gitlab, single-tenant Azure,
# or any other third-party OIDC providers.
url = ""
# If enabled, the nonce check will be skipped. Required for local sign in with Google auth.
skip_nonce_check = false

# Use Firebase Auth as a third-party provider alongside Supabase Auth.
[auth.third_party.firebase]
enabled = false
# project_id = "my-firebase-project"

# Use Auth0 as a third-party provider alongside Supabase Auth.
[auth.third_party.auth0]
enabled = false
# tenant = "my-auth0-tenant"
# tenant_region = "us"

# Use AWS Cognito (Amplify) as a third-party provider alongside Supabase Auth.
[auth.third_party.aws_cognito]
enabled = false
# user_pool_id = "my-user-pool-id"
# user_pool_region = "us-east-1"

# Use Clerk as a third-party provider alongside Supabase Auth.
[auth.third_party.clerk]
enabled = false
# Obtain from https://clerk.com/setup/supabase
# domain = "example.clerk.accounts.dev"

[edge_runtime]
enabled = true
# Configure one of the supported request policies: `oneshot`, `per_worker`.
# Use `oneshot` for hot reload, or `per_worker` for load testing.
policy = "oneshot"
# Port to attach the Chrome inspector for debugging edge functions.
inspector_port = 8083
# The Deno major version to use.
deno_version = 1

# [edge_runtime.secrets]
# secret_key = "env(SECRET_VALUE)"

[analytics]
enabled = true
port = 54327
# Configure one of the supported backends: `postgres`, `bigquery`.
backend = "postgres"

# Experimental features may be deprecated any time
[experimental]
# Configures Postgres storage engine to use OrioleDB (S3)
orioledb_version = ""
# Configures S3 bucket URL, eg. <bucket_name>.s3-<region>.amazonaws.com
s3_host = "env(S3_HOST)"
# Configures S3 bucket region, eg. us-east-1
s3_region = "env(S3_REGION)"
# Configures AWS_ACCESS_KEY_ID for S3 bucket
s3_access_key = "env(S3_ACCESS_KEY)"
# Configures AWS_SECRET_ACCESS_KEY for S3 bucket
s3_secret_key = "env(S3_SECRET_KEY)"
```

## File: supabase/functions/_shared/cors.ts
```typescript
// supabase/functions/_shared/cors.ts
// Standard CORS headers for Supabase Edge Functions
⋮----
'Access-Control-Allow-Origin': '*', // Or restrict to your app's domain
```

## File: supabase/functions/_shared/supabaseClient.ts
```typescript
// supabase/functions/_shared/supabaseClient.ts
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
⋮----
// Ensure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in your environment
⋮----
// It's important to handle the case where these might still be undefined
// if the environment variables are not set, to avoid runtime errors.
// The createClient function might throw an error or return a non-functional client.
// For robustness, you might want to ensure these are present before creating the client,
// or handle potential errors during client creation.
⋮----
supabaseUrl, // No longer need non-null assertion
supabaseServiceRoleKey // No longer need non-null assertion
```

## File: supabase/migrations/20250524130000_create_user_features_table.sql
```sql
-- Create a table to store user feature access
CREATE TABLE public.user_features (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    feature_name text NOT NULL,
    enabled boolean NOT NULL DEFAULT true,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now(),
    UNIQUE(user_id, feature_name)
);

-- Add comments for documentation
COMMENT ON TABLE public.user_features IS 'Stores feature access controls for users';
COMMENT ON COLUMN public.user_features.id IS 'Unique identifier for the feature access record';
COMMENT ON COLUMN public.user_features.user_id IS 'The user this feature access applies to';
COMMENT ON COLUMN public.user_features.feature_name IS 'Name of the feature (e.g., whiteboard, analytics)';
COMMENT ON COLUMN public.user_features.enabled IS 'Whether the feature is enabled for this user';
COMMENT ON COLUMN public.user_features.created_at IS 'When this feature access was granted';
COMMENT ON COLUMN public.user_features.updated_at IS 'When this feature access was last updated';

-- Add an index for faster lookups
CREATE INDEX idx_user_features_user_id ON public.user_features(user_id);

-- Enable Row Level Security
ALTER TABLE public.user_features ENABLE ROW LEVEL SECURITY;

-- Add policies for RLS
DROP POLICY IF EXISTS "Users can view their own feature access" ON public.user_features;
CREATE POLICY "Users can view their own feature access" 
ON public.user_features 
FOR SELECT 
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Only admins can insert user features" ON public.user_features;
CREATE POLICY "Only admins can insert user features" 
ON public.user_features 
FOR INSERT 
WITH CHECK (
    EXISTS (
        SELECT 1 FROM user_features 
        WHERE user_id = auth.uid() 
        AND feature_name = 'admin' 
        AND enabled = true
    )
);

DROP POLICY IF EXISTS "Only admins can update user features" ON public.user_features;
CREATE POLICY "Only admins can update user features" 
ON public.user_features 
FOR UPDATE 
USING (
    EXISTS (
        SELECT 1 FROM user_features 
        WHERE user_id = auth.uid() 
        AND feature_name = 'admin' 
        AND enabled = true
    )
);

DROP POLICY IF EXISTS "Only admins can delete user features" ON public.user_features;
CREATE POLICY "Only admins can delete user features" 
ON public.user_features 
FOR DELETE 
USING (
    EXISTS (
        SELECT 1 FROM user_features 
        WHERE user_id = auth.uid() 
        AND feature_name = 'admin' 
        AND enabled = true
    )
);

-- Create a trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_user_features_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = now();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_user_features_updated_at
  BEFORE UPDATE
  ON public.user_features
  FOR EACH ROW
  EXECUTE FUNCTION public.update_user_features_updated_at_column();

-- Create a function to check if a user has access to a feature
CREATE OR REPLACE FUNCTION public.check_user_feature_access(
    p_user_id UUID,
    p_feature_name TEXT
)
RETURNS BOOLEAN AS $$
DECLARE
    v_has_access BOOLEAN;
BEGIN
    -- Check if the user has the feature enabled
    SELECT EXISTS (
        SELECT 1 
        FROM public.user_features 
        WHERE user_id = p_user_id 
        AND feature_name = p_feature_name 
        AND enabled = true
    ) INTO v_has_access;
    
    RETURN v_has_access;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a function to grant a feature to a user
CREATE OR REPLACE FUNCTION public.grant_user_feature(
    p_user_id UUID,
    p_feature_name TEXT
)
RETURNS VOID AS $$
DECLARE
    is_caller_admin BOOLEAN;
BEGIN
    -- Check if the calling user has admin privileges
    SELECT EXISTS (
        SELECT 1
        FROM public.user_features
        WHERE user_id = auth.uid() -- The user calling this function
        AND feature_name = 'admin'
        AND enabled = true
    ) INTO is_caller_admin;

    IF NOT is_caller_admin THEN
        RAISE EXCEPTION 'User % does not have admin privileges to grant features.', auth.uid();
    END IF;

    -- Insert or update the feature for the user
    INSERT INTO public.user_features (user_id, feature_name, enabled)
    VALUES (p_user_id, p_feature_name, true)
    ON CONFLICT (user_id, feature_name)
    DO UPDATE SET enabled = true, updated_at = now();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a function to revoke a feature from a user
CREATE OR REPLACE FUNCTION public.revoke_user_feature(
    p_user_id UUID,
    p_feature_name TEXT
)
RETURNS VOID AS $$
DECLARE
    is_caller_admin BOOLEAN;
BEGIN
    -- Check if the calling user has admin privileges
    SELECT EXISTS (
        SELECT 1
        FROM public.user_features
        WHERE user_id = auth.uid() -- The user calling this function
        AND feature_name = 'admin'
        AND enabled = true
    ) INTO is_caller_admin;

    IF NOT is_caller_admin THEN
        RAISE EXCEPTION 'User % does not have admin privileges to revoke features.', auth.uid();
    END IF;

    -- Update the feature to disabled for the user
    UPDATE public.user_features 
    SET enabled = false, updated_at = now()
    WHERE user_id = p_user_id AND feature_name = p_feature_name;
    
    -- If no row was updated, insert a disabled feature
    IF NOT FOUND THEN
        INSERT INTO public.user_features (user_id, feature_name, enabled)
        VALUES (p_user_id, p_feature_name, false);
    END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

## File: test-edge-function.ts
```typescript
// test-edge-function.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js';
⋮----
// --- Supabase Client Initialization for Node.js Test Environment ---
// IMPORTANT: These environment variables would need to be set in the
// execution environment for this script to connect to a real Supabase project.
// For this test, we'll use placeholder values. The test will demonstrate
// the invocation pattern but won't make a live call without actual credentials.
⋮----
// Interface for the mock invoke function's options
interface MockFunctionInvokeOptions {
  body?: {
    searchTerm?: string;
    userId?: string;
  };
  headers?: { [key: string]: string };
  // Add other FunctionInvokeOptions properties if your mock needs to be more comprehensive
}
⋮----
// Add other FunctionInvokeOptions properties if your mock needs to be more comprehensive
⋮----
// Create a mock Supabase client if actual credentials are not provided
⋮----
// Simulate a successful response structure for 'site-search'
⋮----
data: { error: 'searchTerm and userId are required.' }, // Simulating error payload from function
error: { message: 'Function error: Missing parameters', status: 400 }, // Simulating Supabase Functions error object
status: 400, // This is a made up status for the mock
⋮----
status: 200, // Simulate HTTP status from function invocation
⋮----
} as unknown as SupabaseClient; // Type assertion for mock
⋮----
// --- Test Logic ---
interface SiteSearchResult {
  id: string;
  type: 'project' | 'user' | 'task' | 'general';
  title: string;
  description?: string;
  url?: string;
}
⋮----
// Interface for error objects that might be returned by invoke,
// especially from the mock or when a status property is expected.
interface InvokeErrorWithMessageAndStatus {
  message: string;
  status?: number;
  // Allow other properties as it could be a full Error object or a custom mock object
  [key: string]: unknown;
}
⋮----
// Allow other properties as it could be a full Error object or a custom mock object
⋮----
async function testSiteSearchFunction()
⋮----
// Explicitly type the expected response structure for invoke
⋮----
'site-search', // Function name
⋮----
console.error('Error Status:', (error as InvokeErrorWithMessageAndStatus).status || 'N/A'); // SupabaseError might have status
console.error('Error Message:', (error as Error).message); // Standard Error objects have 'message'
⋮----
// Verify response structure
⋮----
const firstItem = data[0] as SiteSearchResult; // Cast to SiteSearchResult
⋮----
const hasDescription = 'description' in firstItem ? typeof firstItem.description === 'string' : true; // Optional
const hasUrl = 'url' in firstItem ? typeof firstItem.url === 'string' : true; // Optional
```

## File: src/components/ExcalidrawErrorBoundary.tsx
```typescript
import { Component, ErrorInfo, ReactNode } from 'react';
⋮----
interface Props {
  children: ReactNode;
  fallback: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}
⋮----
interface State {
  hasError: boolean;
}
⋮----
class ExcalidrawErrorBoundary extends Component<Props, State> {  public state: State = {
⋮----
};  public static getDerivedStateFromError(): State
⋮----
// Return state indicating an error has occurred
⋮----
public componentDidCatch(error: Error, errorInfo: ErrorInfo)
⋮----
public render()
```

## File: src/components/ui/due-date-reminder-modal.tsx
```typescript
import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { X, Clock } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
⋮----
type ReminderType = 'day_before' | 'hour_before' | 'on_due_date' | 'custom' | 'none';
⋮----
interface ReminderOption {
  value: ReminderType;
  label: string;
}
⋮----
interface DueDateReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskText: string;
  initialDueDate: string | null;
  initialReminder: {
    type: ReminderType;
    time?: string | null;
  } | null;
  onSave: (dueDate: string | null, reminder: { type: ReminderType; time?: string | null } | null) => void;
}
⋮----
// Parse the initial due date string to a Date object, or use current date if null
⋮----
// State for selected date and reminder
⋮----
// Initialize custom time based on the initial reminder time or current time
⋮----
// Enhanced time picker state
⋮----
// Formatted time for the time input (HH:mm)
⋮----
// Format hours for display (12-hour format)
const formattedHours = () =>
⋮----
const h = hour24 % 12 || 12; // Convert 0 to 12 for AM
⋮----
// Format minutes for display
const formattedMinutes = () =>
⋮----
// Get period (AM/PM) from 24-hour time
const getPeriod = ()
⋮----
// Formatted time for display button
⋮----
// Handle time changes from buttons
const handleHourChange = (newHour: number) =>
⋮----
const handleMinuteChangeButtons = (newMinute: number) =>
⋮----
const handlePeriodChange = (newPeriod: 'AM' | 'PM') =>
⋮----
// Handle time change from the <input type="time">
const handleTimeInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
⋮----
// Helper function to create an ISO string with the selected date and custom time
const getCustomTimeISO = () =>
⋮----
// Helper function to format time as HH:MM
const getFormattedTime = () =>
⋮----
const handleSave = () =>
⋮----
let reminder: { type: ReminderType; time?: string | null } | null = null; // Type explicitly defined here
⋮----
time: null as string | null, // Initialize as null
⋮----
// Set appropriate time for each reminder type
⋮----
// For custom reminders, store the full date+time as ISO
⋮----
// For these reminders, store just the time as HH:MM
⋮----
const handleClear = () =>
⋮----
// Reset time picker to current time
⋮----
onSelect=
⋮----
{/* Enhanced time picker for custom reminder */}
⋮----
{/* Direct Time Input */}
⋮----
{/* Existing Button Controls - can be kept or simplified */}
⋮----
{/* Hours */}
⋮----
{/* Minutes */}
⋮----
{/* AM/PM */}
```

## File: src/components/WhiteboardView.tsx
```typescript
// src/components/WhiteboardView.tsx
import React from 'react';
import Whiteboard from './Whiteboard'; // Assuming Whiteboard.tsx is in the same directory or correctly aliased
import { ErrorBoundary } from 'react-error-boundary';
⋮----
interface WhiteboardViewProps {
  projectId: string; // Keep these as they might be used by parent or for keying
  userId: string | undefined; // Updated to allow undefined
}
⋮----
projectId: string; // Keep these as they might be used by parent or for keying
userId: string | undefined; // Updated to allow undefined
⋮----
const WhiteboardView: React.FC<WhiteboardViewProps> = (
console.log('[WhiteboardView] Rendering simplified pass-through view with projectId:', projectId, 'and userId:', userId);
⋮----
// Guard clause: Don't render if userId is undefined
⋮----
// This component will now simply provide a full-sized container for the actual Whiteboard component.
// The Whiteboard.tsx component is responsible for initializing Excalidraw.
⋮----
// Potentially add logic here to re-fetch data or reset state if needed in a more complex scenario
⋮----
resetKeys={[projectId]} // Reset if projectId changes
⋮----
height: '100%', // Ensure this div takes full space of its parent in WhiteboardTestPage
minHeight: '500px', // Added a min-height to ensure it's not collapsing
⋮----
className="whiteboard-view-container" // For potential specific styling if needed
⋮----
<Whiteboard projectId={projectId} userId={userId} /> {/* Pass projectId and userId */}
```

## File: src/contexts/TimerContext.tsx
```typescript
import React, { useState, useEffect, useRef, useCallback, ReactNode } from 'react';
import { useSessionLog } from '@/hooks/useSessionLog';
import { formatTime } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useSettings } from '@/hooks/useSettings';
import useProjects from '@/hooks/useProjects';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '@/hooks/useAuth';
import { triggerWebhooks } from '@/utils/webhook-manager';
//import { TriggeredReminder } from '@/lib/supabase-types';
import { getTasksByProjectIdFromDb, DbAppTask } from '@/lib/supabase/tasks';
import { UITask, Reminder as ReminderTypeUITask } from '@/lib/types/task';
//import { Project } from '@/contexts/ProjectContextType';
import { 
  TimerContext, 
  TimerState, 
  TimerContextProps,
  TIMER_STATE_STORAGE_KEY, 
  NOTIFICATION_INTERVAL_STORAGE_KEY, 
  DEFAULT_NOTIFICATION_INTERVAL_MINUTES,
  CUSTOM_NOTIFICATION_MESSAGE_SETTING_KEY
} from './TimerContextType';
⋮----
// Define the initial default state (used before hydration)
⋮----
// Separate state for settings moved to TimerContextType.tsx
⋮----
// Function to safely load initial interval
const loadInitialInterval = (): number =>
⋮----
// Helper to parse state safely - Needs update for new fields
// --- THIS FUNCTION IS NOW ONLY FOR PARSING, NOT INITIAL LOADING ---
function parseSavedState(savedStateJSON: string | null): TimerState
⋮----
if (!savedStateJSON) return initialTimerState; // Use the constant default
⋮----
const parsedState = JSON.parse(savedStateJSON); // <-- Parse passed JSON
⋮----
// Basic validation including new fields
⋮----
typeof parsedState.elapsedTimeAtStart !== 'number' || // Add check
⋮----
(parsedState.sessionId !== null && typeof parsedState.sessionId !== 'string') || // Add check
(parsedState.sessionInitialStartTime !== null && typeof parsedState.sessionInitialStartTime !== 'number') || // Add check
(parsedState.activeProjectId !== null && typeof parsedState.activeProjectId !== 'string') // Add check
⋮----
localStorage.removeItem(TIMER_STATE_STORAGE_KEY); // Still remove if invalid
return initialTimerState; // Use the constant default
⋮----
// If the timer was running when the page was closed/reloaded,
// adjust elapsedTime based on how much time has passed since the segment started.
// Also ensure session state is consistent.
⋮----
console.log(`Resuming timer. Session: ${parsedState.sessionId}. InitialStart: ${parsedState.sessionInitialStartTime}. SegmentStart: ${savedStartTime}. SavedElapsedAtStart: ${savedElapsedTimeAtStart}s. Passed: ${timePassedSinceSegmentStart}s. New Elapsed: ${calculatedElapsedTime}s. ProjectId: ${parsedState.activeProjectId}`); // Added log
⋮----
sessionId: parsedState.sessionId, // Restore session ID
sessionInitialStartTime: parsedState.sessionInitialStartTime, // Restore initial start time
activeProjectId: parsedState.activeProjectId // Restore project ID
⋮----
// If it wasn't running, or state is inconsistent, treat as paused.
// Keep the elapsed time and session info if it exists, otherwise reset session.
⋮----
console.log(`Loading paused state. Session ${sessionIsValid ? parsedState.sessionId : 'invalid/reset'}. Elapsed: ${parsedState.elapsedTime}s. ProjectId: ${parsedState.activeProjectId}`); // Added log
⋮----
// When paused, elapsedTimeAtStart should equal elapsedTime
⋮----
activeProjectId: parsedState.activeProjectId // Restore project ID
⋮----
return initialTimerState; // Fallback to default state on error
⋮----
// Utility function to generate unique IDs
const generateId = (): string =>
⋮----
// Placeholder for converting DbAppTask to UITask - REPLACE with a shared utility
function dbTaskToUiTaskForReminders(dbTask: DbAppTask): UITask
⋮----
// Define the interface for reminder objects
interface ReminderType {
  type: string;
  time?: string | null;
}
⋮----
// Add an interface for Task with id property
// interface TaskWithId {
//   id?: string;
//   text: string;
//   completed: boolean;
//   duration: number;
//   priority?: number;
//   due_date?: string | null;
//   reminder?: ReminderType | null;
// }
⋮----
// Function to check if a reminder should be triggered based on a due date and reminder settings
const shouldTriggerReminder = (dueDate: string, reminderType: string, reminder?: ReminderType): boolean =>
⋮----
// Don't trigger reminders for past dates
⋮----
// Trigger if it's the due date and we haven't previously triggered
⋮----
// One day before: due date is tomorrow
⋮----
// Within one hour of the due time
⋮----
// For custom reminder times, check if the current time matches the custom time
⋮----
// Invalid or missing custom reminder time
⋮----
// Try to extract date parts if it's a string with recognizable format
⋮----
// Attempt recovery if it looks like an ISO date string missing time component
⋮----
const recoveredDate = new Date(`${dateOnly}T12:00:00`); // Default to noon
⋮----
// Continue with recovered date
⋮----
// Check if current time is within 1 minute of the custom time
⋮----
// Helper functions for date comparison
const isToday = (date: Date): boolean =>
⋮----
const isSameDay = (date1: Date, date2: Date): boolean =>
⋮----
// Export the context to be accessible to other files
⋮----
export const TimerProvider: React.FC<
⋮----
const [timerState, setTimerState] = useState<TimerState>(initialTimerState); // Use the updated loader
const [isLoading, setIsLoading] = useState(true); // <-- Add loading state, start as true
⋮----
// Notification Interval State (Moved from Timer.tsx)
⋮----
// ---> Add state for custom notification message <---
⋮----
// Refs
⋮----
const lastReminderCheckRef = useRef<number>(0); // Track when we last checked reminders
⋮----
// Hooks
⋮----
const { toast } = useToast(); // <-- Use toast hook here
const { selectedSound, playSound } = useSettings(); // <-- Get sound state and play function
const { projects, loading: projectsLoading, refetchProjectData } = useProjects(); // <-- Get projects, LOADING state, removed updateProject
const { user, loading: authLoading } = useAuth(); // <-- Get user and LOADING state
⋮----
// ---> Wrap fetch logic in useCallback <---
⋮----
// If no user or still loading auth, ensure message is null
if (customNotificationMessage !== null) { // Only update if needed
⋮----
// console.log("TIMER_CONTEXT: User logged out or loading, clearing custom message."); // Debug
⋮----
// console.log("TIMER_CONTEXT: User logged in, attempting to fetch custom message."); // Debug
⋮----
// Always set state, even if fetchedMessage is the same, to ensure reactivity downstream if needed
// (Though in this specific case, checking might be slightly more performant if updates are frequent)
⋮----
// console.log(`TIMER_CONTEXT: Fetched custom message: "${fetchedMessage}"`); // Debug
⋮----
// Optionally set message to null on error, or leave it as is? Setting to null for safety.
⋮----
// Include dependencies for the fetch logic itself
}, [user, authLoading, addLog, customNotificationMessage]); // Removed supabase dependency, kept customNotificationMessage
⋮----
// ---> Effect to fetch custom notification message ONCE on auth change <---
⋮----
// Call the memoized fetch function when user or auth state changes
⋮----
// Dependencies: User and auth loading state trigger this initial fetch
}, [refetchCustomNotificationMessage]); // Now only depends on the stable callback
⋮----
// --- Effect for Hydrating State from localStorage AFTER Auth/Projects Load ---
⋮----
// Wait until both auth and projects are done loading
⋮----
// console.log("TIMER_CONTEXT: Waiting for auth/projects to load..."); // Debug log
setIsLoading(true); // Ensure loading is true while waiting
⋮----
// console.log("TIMER_CONTEXT: Auth and Projects loaded. Hydrating timer state..."); // Debug log
⋮----
// Get the actual active project from the loaded projects
⋮----
// console.log(`TIMER_CONTEXT: Found active project ID from ProjectContext: ${actualActiveProjectId}`); // Debug log
⋮----
// Now load from localStorage
⋮----
loadedState = parseSavedState(savedStateJSON); // Use the parsing helper
// console.log("TIMER_CONTEXT: State loaded/parsed from localStorage:", loadedState); // Debug log
⋮----
loadedState = initialTimerState; // Fallback on error
⋮----
// **Crucially, override the activeProjectId with the one from ProjectContext**
⋮----
// console.log(`TIMER_CONTEXT: Final hydrated state (Project ID ${hydratedState.activeProjectId}):`, hydratedState); // Debug log
⋮----
// Set the hydrated state
⋮----
setIsLoading(false); // Hydration complete
⋮----
// Dependencies: Run when loading states change or when user/projects potentially change
⋮----
// --- Effect to Save core timer state to localStorage ---
⋮----
// Only save if NOT loading initial state
⋮----
sessionId: timerState.sessionId, // Added save
sessionInitialStartTime: timerState.sessionInitialStartTime, // Added save
activeProjectId: timerState.activeProjectId // Added save
⋮----
}, [timerState, isLoading]); // <-- Add isLoading dependency
⋮----
// Save notification interval state to localStorage (Moved from Timer.tsx)
⋮----
// --- Notification Logic --- NOTE: Defined BEFORE the core timer useEffect that uses it
⋮----
// Get the current time to implement throttling
⋮----
// Only show notification if it's been at least 3 seconds since the last one
// This prevents multiple notifications from firing at the same time
⋮----
// Update the last notification time
⋮----
// Note: We now read elapsedTime directly from timerState within the provider scope
⋮----
// For notification purposes, we want to use full minutes
// Round to the nearest minute to match the notification interval exactly
⋮----
// ---> Use customNotificationMessage state here <---
⋮----
let notificationBody = `Current session: ${formattedTime}`; // Default body
⋮----
// Replace placeholder {time} with formattedTime
⋮----
// Keep original log message separate from notification content - Make neutral
⋮----
// Use the playSound function from SettingsContext
const playSelectedSound = () =>
⋮----
// Optional: Play twice? Removed the second play for now, can be added back if desired.
// setTimeout(() => playSound(`/audio/${selectedSound}`), 500);
⋮----
const showToastFallback = (reason: string) =>
⋮----
// ---> Make toast title and description neutral <---
⋮----
title: "Interval Reminder", // <-- Change title
description: `Focus session currently running for: ${formattedTime}`, // <-- Change description
⋮----
playSelectedSound(); // Play the selected sound for toast fallback
⋮----
// Conditionally set notification options
⋮----
body: notificationBody, // <-- Use the determined body
⋮----
// If a custom sound is selected, make the native notification silent
// so we can play our own sound without doubling up.
⋮----
// Create the notification with the determined options
new Notification(notificationTitle, notificationOptions); // <-- Use the title
⋮----
playSelectedSound(); // Play the selected sound for native notification
⋮----
// If permission is not granted (denied or default), use fallback
⋮----
// ---> Add customNotificationMessage to dependency array <---
⋮----
// --- End Notification Logic ---
⋮----
// Function to check for task reminders
⋮----
// Only check reminders once per minute to avoid excessive checking
⋮----
if (now - lastReminderCheckRef.current < 60000) { // 60000ms = 1 minute
⋮----
const fetchTriggeredReminders = async (): Promise<string[]> =>
⋮----
const markReminderAsTriggered = async (taskId: string) =>
⋮----
// Fetch previously triggered reminders
⋮----
if (!project || !project.id) continue; // Skip if project or project.id is null/undefined
⋮----
// Fetch tasks directly for the current project in the loop
⋮----
continue; // Skip to next project on error
⋮----
// Skip if no tasks loaded for this project
⋮----
// Skip completed tasks or tasks without due dates/reminders
⋮----
markReminderAsTriggered(taskId); // Now defined in scope
⋮----
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [user, supabase, projects, toast, selectedSound, playSound]); // Removed fetchTriggeredReminders and markReminderAsTriggered from here as they are defined inside. Added supabase and projects.
⋮----
// Update the timer interval function
⋮----
// Skip if auth/projects are still loading
⋮----
// Function that runs on each interval
const onInterval = () =>
⋮----
// Update elapsed time
⋮----
// Should not happen, but stop interval if state is inconsistent
⋮----
// Check for timer notification intervals
⋮----
// Only trigger if we've crossed from one interval to the next
⋮----
// Check for task reminders
⋮----
// Clear any existing interval
⋮----
// Create a new interval
⋮----
// Return cleanup function
⋮----
// Clear interval if timer is stopped
⋮----
// Also check for reminders on initial load and when projects change
⋮----
// --- Timer Control Functions ---
⋮----
// Function to START or RESUME the timer
⋮----
// Ensure we're not trying to start while loading
⋮----
// If already running, do nothing
⋮----
// Action message for log - either starting anew or resuming after pause
⋮----
// New session data for active project (if any)
⋮----
// If this is a fresh start (not a resume), log the session creation
⋮----
// Trigger session.start webhook for new sessions
⋮----
// Determine the project ID to use
// Use the provided projectId if available, otherwise keep the existing one
⋮----
elapsedTimeAtStart: elapsedTime, // Mark the elapsed time at the start of this segment
activeProjectId: currentProjectId, // Update the project ID
⋮----
didLogStopRef.current = false; // Reset log flag as we're now running
⋮----
}, [addLog, projects, isLoading, user]); // <-- Add user dependency
⋮----
// Renamed from stopTimer - Only pauses the timer
⋮----
// Ensure we're not trying to pause while loading
⋮----
return prevState; // Do nothing if not running
⋮----
// Calculate final elapsed time for this segment before updating state
⋮----
// Log stop only once per running segment
⋮----
// Corrected addLog call
⋮----
didLogStopRef.current = true; // Mark stop as logged
⋮----
// Update state to reflect paused status
⋮----
startTime: null, // Clear segment start time
elapsedTime: finalElapsedTime, // Update total elapsed time
elapsedTimeAtStart: finalElapsedTime, // When paused, this becomes the new base for next resume
⋮----
didLogStopRef.current = true; // Mark that a pause/stop action occurred
⋮----
}, [addLog, isLoading]); // Removed timerState, keep only addLog and isLoading
⋮----
// Function to SAVE the completed session and reset the timer state
⋮----
// Ensure we're not trying to save while loading
⋮----
// Capture state BEFORE resetting
⋮----
// console.log(`TIMER_CONTEXT: Saving and Resetting. Session: ${sessionId}. Elapsed: ${elapsedTime}s. Project: ${activeProjectId}. WasRunning: ${isRunning}`); // Debug
⋮----
// 1. If running, log the final stop event
⋮----
// Corrected addLog call
⋮----
// 2. Save to Supabase (if user is logged in and session exists)
⋮----
throw insertError; // Throw error to be caught below
⋮----
// Trigger session.end webhooks with session data
⋮----
// --- Call refetchProjectData here ---
⋮----
// Catch errors from saving the session
⋮----
// 3. Reset the local timer state
setTimerState(initialTimerState); // Reset to the initial default state
localStorage.removeItem(TIMER_STATE_STORAGE_KEY); // Clear storage explicitly
didLogStopRef.current = false; // Reset log flag
// console.log("TIMER_CONTEXT: State reset."); // Debug
}, [timerState, user, projects, toast, addLog, isLoading, refetchProjectData]); // Removed supabase and updateProject
⋮----
// Function to simply reset the timer WITHOUT saving the current session
⋮----
// Ensure we're not trying to reset while loading
⋮----
// console.log(`TIMER_CONTEXT: Resetting WITHOUT saving. Session: ${sessionId}. Elapsed: ${elapsedTime}s. Project: ${activeProjectId}. WasRunning: ${isRunning}`); // Debug
⋮----
// Log an abort/cancel event if there was an active session
⋮----
// Trigger session.reset webhook if there was an active session
⋮----
setTimerState(initialTimerState); // Reset to default state
localStorage.removeItem(TIMER_STATE_STORAGE_KEY); // Clear storage
didLogStopRef.current = false; // Reset log flag
}, [addLog, timerState, isLoading, projects, user]); // <-- Add projects and user dependencies
⋮----
// Update Notification Interval (Moved from Timer.tsx)
⋮----
}, [addLog]); // Depends on addLog (stable)
⋮----
// New function to explicitly set the active project ID for the timer
⋮----
// Ensure we're not trying to set ID while loading
⋮----
// console.log(`TIMER_CONTEXT: Setting active project ID via function to: ${projectId}`); // Debug
⋮----
// Only update if the ID is actually different
⋮----
}, [isLoading]); // <-- Add isLoading
⋮----
// --- Context Value ---
⋮----
// Spread all properties from timerState
⋮----
// Spread all properties from timerSettings
⋮----
customNotificationMessage: customNotificationMessage, // <-- Pass the state value
⋮----
// Other context values
loading: isLoading || authLoading, // Combine loading states
⋮----
refetchCustomNotificationMessage // <-- Provide the refetch function
⋮----
// Removed old helper - loadInitialState for core timer state
⋮----
// Helper to parse state safely
/* // Removed - Integrated directly into useState initializer
function loadInitialState(): TimerState {
    // Default state
    const defaultState: TimerState = { isRunning: false, elapsedTime: 0, startTime: null };
    try {
*/
```

## File: src/hooks/useFeatureAccess.ts
```typescript
// src/hooks/useFeatureAccess.ts
import { useState, useEffect, useCallback } from 'react';
import { useAuth } from './useAuth';
import { checkUserFeatureAccess, getUserFeatures } from '@/lib/supabase/userFeatures';
⋮----
/**
 * Hook to check if the current user has access to specific features
 */
export function useFeatureAccess()
⋮----
// Load all features the user has access to
⋮----
// Capture values at the start of the effect to avoid race conditions
⋮----
const loadFeatures = async () =>
⋮----
setFeatures([]); // Clear features on error
⋮----
// Always run when auth state changes, including when user becomes null
⋮----
// Check if a user has access to a specific feature
⋮----
// Check access for a specific feature, bypassing the cache
⋮----
// Refresh the features list
⋮----
loading, // Whether feature data is being loaded
features, // Array of all features the user has access to
hasAccess, // Function to check access to a feature (from cache)
checkAccess, // Function to check access to a feature (from server)
refreshFeatures // Function to refresh the features list
```

## File: src/lib/supabase/database.types.ts
```typescript
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]
⋮----
export interface Database {
  public: {
    Tables: {
      user_features: {
        Row: {
          id: string
          user_id: string
          feature_name: string
          enabled: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          feature_name: string
          enabled?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          feature_name?: string
          enabled?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          color: string
          is_active: boolean
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          color: string
          is_active?: boolean
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          color?: string
          is_active?: boolean
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      tasks: {
        Row: {
          id: string
          project_id: string
          user_id: string
          parent_task_id: string | null
          text: string
          notes: string | null
          description: string | null
          due_date: string | null
          duration: number | null
          priority: number | null
          reminder: Json | null
          completed: boolean
          order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          project_id: string
          user_id: string
          parent_task_id?: string | null
          text: string
          notes?: string | null
          description?: string | null
          due_date?: string | null
          duration?: number | null
          priority?: number | null
          reminder?: Json | null
          completed?: boolean
          order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          user_id?: string
          parent_task_id?: string | null
          text?: string
          notes?: string | null
          description?: string | null
          due_date?: string | null
          duration?: number | null
          priority?: number | null
          reminder?: Json | null
          completed?: boolean
          order?: number
          created_at?: string
          updated_at?: string
        }
      }
      focus_sessions: {
        Row: {
          id: string
          user_id: string
          project_id: string | null
          project_name: string | null
          duration: number
          completed: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          project_id?: string | null
          project_name?: string | null
          duration: number
          completed?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          project_id?: string | null
          project_name?: string | null
          duration?: number
          completed?: boolean
          created_at?: string
        }
      }
      synced_tasks: {
        Row: {
          id: string
          user_id: string
          source: string
          source_task_id: string
          content: string
          description: string | null
          due_date: string | null
          priority: number | null
          project_id: string | null
          labels: string[] | null
          is_completed: boolean
          synced_at: string
          created_at: string
          raw_data: Json | null
        }
        Insert: {
          id?: string
          user_id: string
          source: string
          source_task_id: string
          content: string
          description?: string | null
          due_date?: string | null
          priority?: number | null
          project_id?: string | null
          labels?: string[] | null
          is_completed?: boolean
          synced_at: string
          created_at?: string
          raw_data?: Json | null
        }
        Update: {
          id?: string
          user_id?: string
          source?: string
          source_task_id?: string
          content?: string
          description?: string | null
          due_date?: string | null
          priority?: number | null
          project_id?: string | null
          labels?: string[] | null
          is_completed?: boolean
          synced_at?: string
          created_at?: string
          raw_data?: Json | null
        }
      }
      templates: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      template_tasks: {
        Row: {
          id: string
          template_id: string
          task_name: string
          task_duration: number
          order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          template_id: string
          task_name: string
          task_duration: number
          order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          template_id?: string
          task_name?: string
          task_duration?: number
          order?: number
          created_at?: string
          updated_at?: string
        }
      }
      whiteboards: {
        Row: {
          id: string
          project_id: string
          user_id: string
          whiteboard_data: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          project_id: string
          user_id: string
          whiteboard_data?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          user_id?: string
          whiteboard_data?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      batch_update_task_orders: {
        Args: {
          updates: Json
          requesting_user_id: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
  }}
```

## File: src/lib/supabase/tasks.ts
```typescript
import { SupabaseClient } from '@supabase/supabase-js';
import { TodoistTask } from '@/components/todoist-integration'; // Assuming this interface is accessible
⋮----
// Define a type for raw task data from external APIs
export interface RawTaskData {
  [key: string]: unknown;
}
⋮----
// Define the structure matching our Supabase table (adjust types if needed)
export interface SyncedTask {
  id: string; // UUID from Supabase
  user_id: string;
  source: string;
  source_task_id: string; // Original Todoist ID
  content: string;
  description?: string | null;
  due_date?: string | null; // Timestamptz as string
  priority?: number | null;
  project_id?: string | null;
  labels?: string[] | null;
  is_completed: boolean;
  synced_at: string; // Timestamptz as string
  created_at: string; // Timestamptz as string
  raw_data?: RawTaskData | null; // JSONB
}
⋮----
id: string; // UUID from Supabase
⋮----
source_task_id: string; // Original Todoist ID
⋮----
due_date?: string | null; // Timestamptz as string
⋮----
synced_at: string; // Timestamptz as string
created_at: string; // Timestamptz as string
raw_data?: RawTaskData | null; // JSONB
⋮----
/**
 * Fetches synced tasks from Supabase for the current user and a specific source.
 */
export async function fetchSupabaseTasks(
  supabase: SupabaseClient,
  userId: string,
  source: string = 'todoist'
): Promise<SyncedTask[]>
⋮----
.order('created_at', { ascending: true }); // Or order as needed
⋮----
throw error; // Re-throw the error to be handled by the caller
⋮----
/**
 * Upserts (inserts or updates) tasks into the Supabase synced_tasks table.
 */
export async function upsertSupabaseTasks(
  supabase: SupabaseClient,
  userId: string,
  tasks: TodoistTask[], // Tasks fetched from Todoist API
  source: string = 'todoist'
): Promise<void>
⋮----
tasks: TodoistTask[], // Tasks fetched from Todoist API
⋮----
return; // Nothing to upsert
⋮----
source_task_id: task.id, // Map Todoist ID here
⋮----
description: null, // Add mapping if available from TodoistTask
due_date: task.due?.date ? new Date(task.due.date).toISOString() : null, // Ensure ISO string format
priority: null, // Add mapping if available
⋮----
labels: null, // Add mapping if available
⋮----
synced_at: new Date().toISOString(), // Mark sync time
// raw_data: task // Optional: store the original task object
// created_at is handled by default value in DB
⋮----
// Note: Supabase upsert uses the PRIMARY KEY or unique constraints to determine conflict.
// Our UNIQUE constraint is (user_id, source, source_task_id)
⋮----
// Specify the constraint name if default inference doesn't work,
// or columns for conflict resolution if needed. Usually inferred correctly.
// onConflict: 'user_id, source, source_task_id' // Usually not needed if constraint is set up
ignoreDuplicates: false // We want to update duplicates
⋮----
throw error; // Re-throw the error
⋮----
// Optional: Function to delete tasks no longer present in the source
// export async function deleteStaleTasks(
//   supabase: SupabaseClient,
//   userId: string,
//   sourceTaskIds: string[], // Current task IDs from source
//   source: string = 'todoist'
// ) {
//   // Fetch tasks from DB that are NOT in the sourceTaskIds list
//   // Then delete them
// }
⋮----
// Define the structure for tasks from our 'public.tasks' table
// This should align with your table columns and UITask
export interface DbAppTask {
  id: string; // uuid
  project_id: string; // uuid
  user_id: string; // uuid
  parent_task_id?: string | null; // uuid
  text: string;
  notes?: string | null;
  description?: string | null;
  due_date?: string | null; // timestamptz
  duration?: number | null;
  priority?: number | null;
  reminder?: Record<string, unknown> | null; // jsonb - can be Reminder type or other structure
  completed: boolean;
  order: number;
  created_at: string; // timestamptz
  updated_at: string; // timestamptz
}
⋮----
id: string; // uuid
project_id: string; // uuid
user_id: string; // uuid
parent_task_id?: string | null; // uuid
⋮----
due_date?: string | null; // timestamptz
⋮----
reminder?: Record<string, unknown> | null; // jsonb - can be Reminder type or other structure
⋮----
created_at: string; // timestamptz
updated_at: string; // timestamptz
⋮----
const TABLE_NAME = 'tasks'; // Our main tasks table
⋮----
export async function getTasksByProjectIdFromDb(
  supabaseClient: SupabaseClient, // Changed from supabase to supabaseClient to avoid conflict
  projectId: string,
  userId: string
): Promise<DbAppTask[]>
⋮----
supabaseClient: SupabaseClient, // Changed from supabase to supabaseClient to avoid conflict
⋮----
// For creating a task, we omit id, created_at, updated_at, completed, order (initially)
export type NewAppTaskData = Omit<DbAppTask, 'id' | 'created_at' | 'updated_at' | 'completed' | 'order'> & 
                           { order?: number; completed?: boolean }; // order and completed can be optional initially
⋮----
{ order?: number; completed?: boolean }; // order and completed can be optional initially
⋮----
export async function createTaskInDb(
  supabaseClient: SupabaseClient,
  taskData: NewAppTaskData
): Promise<DbAppTask>
⋮----
// Validate required fields
⋮----
completed: taskData.completed ?? false, // Default completed to false
// order will be set here if provided, or handled by DB default/trigger or subsequent update
⋮----
export type UpdateAppTaskData = Partial<Omit<DbAppTask, 'id' | 'project_id' | 'user_id' | 'created_at' | 'updated_at'>>;
⋮----
export async function updateTaskInDb(
  supabaseClient: SupabaseClient,
  taskId: string,
  updates: UpdateAppTaskData,
  userId: string
): Promise<DbAppTask>
⋮----
.eq('user_id', userId) // Ensure user owns the task
⋮----
export async function deleteTaskFromDb(
  supabaseClient: SupabaseClient,
  taskId: string,
  userId: string
): Promise<boolean>
⋮----
export interface TaskOrderUpdate {
  id: string;
  order: number;
}
⋮----
export async function batchUpdateTaskOrderInDb(
  supabaseClient: SupabaseClient,
  tasksToUpdate: TaskOrderUpdate[],
  userId: string
): Promise<void>
⋮----
// First, try to use the RPC function for batch updates
type BatchUpdateFunction = (
      functionName: string,
      args: { 
        updates: TaskOrderUpdate[]; 
        requesting_user_id: string; 
      }
    ) => Promise<{ data: unknown; error: unknown }>;
⋮----
// Fallback: Update tasks individually
```

## File: src/lib/utils/debounce-excalidraw.ts
```typescript
import { debounce as originalDebounce } from './debounce';
⋮----
/**
 * A specialized version of debounce specifically for handling Excalidraw elements
 * to avoid TypeScript errors when working with the Whiteboard component.
 */
export function debounceExcalidraw(
  func: (elements: unknown) => void,
  waitFor: number
):
⋮----
// Create a wrapper function that has the correct signature for originalDebounce
// by making it accept a rest parameter, but it will be called with an array
⋮----
// The first argument should be the elements array, defaulting to an empty array
// if none is provided.
// Ensure 'this' context and the elements argument are forwarded.
⋮----
// Use the original debounce with the compatible function
⋮----
// Create a wrapper that takes the expected parameter shape
const debounced = (elements: unknown): void =>
```

## File: supabase/functions/notify-due-reminders/index.ts
```typescript
// supabase/functions/notify-due-reminders/index.ts
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';
⋮----
interface Task {
  id: string;
  user_id: string;
  text: string;
  project_id: string;
  due_date: string | null;
  reminder: { type: string; time?: string }; // Assuming reminder.time is an ISO string for custom reminders
  custom_reminder_processed_at?: string | null; // Already present for custom reminders
  overdue_notified_at?: string | null; // NEW
  due_soon_notified_at?: string | null; // NEW
}
⋮----
reminder: { type: string; time?: string }; // Assuming reminder.time is an ISO string for custom reminders
custom_reminder_processed_at?: string | null; // Already present for custom reminders
overdue_notified_at?: string | null; // NEW
due_soon_notified_at?: string | null; // NEW
⋮----
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Project {
  id: string;
  name: string;
}
⋮----
// This function will be triggered by a cron schedule, not an HTTP request,
// but Deno Deploy requires a default export that handles requests.
// We can add a manual trigger via HTTP if desired for testing.
⋮----
// For Overdue and Due Soon calculations
const today = new Date(nowUtcString); // Use UTC for consistency
today.setUTCHours(0, 0, 0, 0); // Start of today UTC
⋮----
// --- 1. Process Custom Reminders ---
⋮----
// Decide if to throw or continue with other notification types
⋮----
// 2. Fetch project name for the notification
⋮----
// 3. Send notification via Supabase Realtime
⋮----
event: 'custom_reminder', // Differentiates this from other potential Realtime messages
⋮----
// Add any other fields your client-side triggerNotification function expects
⋮----
const channel = supabase.channel(channelName); // Instantiate channel here
const sendNotificationWithRetry = async (retries: number, delay: number): Promise<boolean> =>
⋮----
const realtimeResponse = await channel.send({ // Reuse channel instance
⋮----
event: 'new_notification', // Client will listen for this event
⋮----
delay *= 2; // Exponential backoff
⋮----
const notificationSent = await sendNotificationWithRetry(3, 1000); // 3 retries, starting with 1s delay
⋮----
// Decide if you want to skip updating custom_reminder_processed_at if Realtime fails
// For now, we'll continue and mark it as processed to avoid spamming on retries
⋮----
// 4. Mark reminder as processed
⋮----
// Potentially handle this, e.g., by not sending Realtime if DB update fails, or retry logic
⋮----
// --- 2. Process Overdue Tasks ---
⋮----
.lt('due_date', todayUtcString) // Due date is before start of today UTC
.or(`overdue_notified_at.is.null,overdue_notified_at.lt.${twelveHoursAgo}`); // Not notified or not notified in last 12 hours
⋮----
// --- 3. Process Due Soon Tasks ---
// (Ensure these are not already covered by overdue logic if due_date is also < todayUtcString)
⋮----
.gte('due_date', todayUtcString) // Due date is today or in the future
.lt('due_date', twentyFourHoursFromNow) // Due date is within the next 24 hours
.or(`due_soon_notified_at.is.null,due_soon_notified_at.lt.${threeHoursAgo}`); // Not notified or not notified in last 3 hours
⋮----
// Avoid notifying if it was just processed as overdue (edge case if cron runs at midnight)
// This check might be redundant if overdue query is strict enough (lt todayUtcString)
// but good for safety.
⋮----
// --- End of processing ---
```

## File: supabase/functions/site-search/index.ts
```typescript
// supabase/functions/site-search/index.ts
⋮----
import { supabase } from '../_shared/supabaseClient.ts';
import { corsHeaders } from '../_shared/cors.ts';
⋮----
// Redefined interfaces (as direct import might be tricky in Edge Functions)
interface SiteSearchResult {
  id: string;
  type: 'project' | 'user' | 'task' | 'general';
  title: string;
  description?: string;
  url?: string;
}
⋮----
interface DbProject {
  id: string;
  name: string;
  description?: string | null;
  user_id: string;
  // Add other fields if necessary based on your actual 'projects' table structure
}
⋮----
// Add other fields if necessary based on your actual 'projects' table structure
⋮----
interface DbAppTask {
  id: string;
  text: string;
  description?: string | null;
  notes?: string | null;
  project_id: string;
  user_id: string; // Assuming tasks also have user_id for direct filtering
  // Add other fields if necessary
}
⋮----
user_id: string; // Assuming tasks also have user_id for direct filtering
// Add other fields if necessary
⋮----
// Handle CORS preflight requests
⋮----
// 1. Search Projects
// First, fetch ALL projects for the user. This ensures `projectsDataForTaskLookup`
// has all necessary data for associating tasks with their project names later.
⋮----
.select('id, name, description, user_id') // Ensure all fields needed for lookup are here
⋮----
// Now, search for projects matching the searchTerm to add to the main results list,
// using a direct database query with ilike for efficiency.
⋮----
.select('id, name, description') // Select fields needed for the search result item
.eq('user_id', userId) // Scope search to the current user's projects
.or(`name.ilike.${lowerTerm},description.ilike.${lowerTerm}`); // Case-insensitive search on name and description
⋮----
for (const project of matchingProjectsData as DbProject[]) { // Iterate over DB-filtered projects
⋮----
description: project.description || undefined, // Handle null description
⋮----
// 2. Search Tasks
⋮----
.select('id, text, description, notes, project_id, user_id') // Ensure user_id is selected
.eq('user_id', userId) // Filter by user_id
⋮----
// 3. Search Users (Profiles)
// This part might need adjustment based on whether you want to search ALL users
// or only users related to the current userId (e.g., in shared projects).
// The original code searches all profiles matching the term.
⋮----
.from('profiles') // Assuming 'profiles' is the table name for users
.select('id, username') // Removed avatar_url for simplicity, add if needed
⋮----
// Note: This does NOT filter by the input `userId` for searching profiles.
// It searches all users whose username matches the term.
⋮----
url: `/users/${user.id}`, // Adjust URL as needed
⋮----
// Deduplicate results
```

## File: src/components/layout/SidebarNav.tsx
```typescript
import { Clock, BarChart, Briefcase, ExternalLink, Settings, Aperture, Brush } from "lucide-react"
import { NavLink, useLocation } from 'react-router-dom'
import { 
  SidebarMenu, 
  SidebarMenuItem,
  SidebarHeader, 
  SidebarTitle, 
  SidebarContent,
  SidebarFooter,
  SidebarMenuButton // Ensure SidebarMenuButton is imported
} from "@/components/ui/sidebar"
⋮----
SidebarMenuButton // Ensure SidebarMenuButton is imported
⋮----
import { AuthButton } from "@/components/layout/AuthButton"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { useSettings } from "@/hooks/useSettings"
// import { useFeatureAccess } from "@/hooks/useFeatureAccess"
// Tooltip components are needed for the footer button
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useSidebar } from "@/hooks/use-sidebar"
import { cn } from "@/lib/utils"
⋮----
// Remove custom style objects - they are no longer needed
// const navLinkStyles = { ... };
// const menuItemStyles = { ... };
⋮----
// Tooltip props for SidebarMenuButton
⋮----
//const { hasAccess } = useFeatureAccess(); // link removed until we need to test whiteboard again
⋮----
// Helper to check active state
const checkActive = (path: string, end: boolean = false) =>
⋮----
// For non-end paths, check if the current path starts with the target path
// Ensure a trailing slash for parent paths if needed, or adjust logic
⋮----
// Only show Whiteboard Test for users with whiteboard access
//...(hasAccess('whiteboard') ? [{ path: "/whiteboard-test", label: "Whiteboard Test", icon: PenTool }] : []), // link removed until we need to test whiteboard again
⋮----
{/* Show Title when expanded */}
⋮----
{/* Show App Logo Placeholder when collapsed */}
⋮----
<Aperture className="h-6 w-6" /> { /* App Logo Placeholder */ }
⋮----
{/* The span content is handled by SidebarMenuButton's layout */}
⋮----
{/* Keep Tooltip for the Button as it's not a SidebarMenuButton */}
```

## File: src/lib/site-search.ts
```typescript
// src/lib/site-search.ts
⋮----
import { supabase } from './supabaseClient';
// DbProject and DbAppTask are no longer needed here as the logic is in the edge function.
⋮----
export interface SiteSearchResult {
  id: string;
  type: 'project' | 'user' | 'task' | 'general';
  title: string;
  description?: string;
  url?: string;
}
⋮----
export const performSiteSearch = async (term: string, userId?: string): Promise<SiteSearchResult[]> =>
⋮----
// Depending on requirements, you might want to throw the error
// or return an empty array as it does now.
// For now, returning an empty array to match previous behavior on direct DB errors.
⋮----
// Ensure the data is in the expected format.
// The edge function should already return SiteSearchResult[], but it's good practice to check.
⋮----
// You could add more sophisticated type checking here if necessary,
// e.g., checking if each item in the array has the required properties.
⋮----
// Handle network errors or other issues during the invoke call.
```

## File: src/lib/supabase/whiteboards.ts
```typescript
// src/lib/supabase/whiteboards.ts
import { supabase } from '../supabaseClient';
import { WhiteboardDataFromSupabase } from '../types/excalidraw-types';
⋮----
// Define a type for the whiteboard data structure
interface WhiteboardData {
  elements?: unknown[];
  appState?: Record<string, unknown>;
  files?: Record<string, unknown>;
}
⋮----
// Consider adding error logging utility if you have one
⋮----
export async function getWhiteboardByProjectId(
  projectId: string,
  userId: string
): Promise<WhiteboardDataFromSupabase | null>
⋮----
.maybeSingle(); // Use maybeSingle() if you expect 0 or 1 row
⋮----
// Return the properly typed data, with type assertion from Json to WhiteboardDataFromSupabase
⋮----
export async function saveWhiteboard(
  projectId: string,
  userId: string,
  whiteboardData: WhiteboardData
): Promise<boolean>
⋮----
// Sanitize the whiteboard data to only keep elements
// This prevents saving problematic view state that could cause rendering issues
⋮----
// Check if a whiteboard entry already exists
⋮----
// Update existing entry
// updated_at is handled by the database trigger
⋮----
// Insert new entry
// created_at and updated_at will be set by default by the database
⋮----
.select('id') // Select the id of the newly inserted row
.single(); // Expect a single row back
⋮----
// Note: Not updating the projects table as whiteboard_id column doesn't exist
// The whiteboard is tracked by project_id in the whiteboards table instead
⋮----
export async function checkWhiteboardExists(
  projectId: string,
  userId: string
): Promise<boolean>
⋮----
const { error, count } = await supabase // Removed unused 'data' variable
⋮----
.select('id', { count: 'exact', head: true }) // Use head:true for a faster count
⋮----
export async function deleteWhiteboard(
  projectId: string,
  userId: string
): Promise<boolean>
⋮----
// First, find the whiteboard to delete
⋮----
}    // Delete the whiteboard entry
```

## File: src/lib/supabaseClient.ts
```typescript
import { createClient } from '@supabase/supabase-js'
import type { Database } from './supabase/database.types'
⋮----
// Note: Use process.env for Node.js environments, use import.meta.env for Vite
⋮----
// Ensure we have the required environment variables
⋮----
// Create and export the Supabase client instance with cookie-based storage
⋮----
// Retrieves the value of a cookie by its key. Returns null if the cookie does not exist.
// Security note: This function assumes that cookies are properly sanitized and do not contain sensitive data.
⋮----
const cookies = cookie.parse(document.cookie); // Parse all cookies into an object.
return cookies[key] || null; // Return the value of the specified cookie or null if not found.
⋮----
// Sets a cookie with the specified key and value.
// Security note: The `secure` flag ensures cookies are only sent over HTTPS. The `sameSite` attribute mitigates CSRF attacks.
⋮----
path: '/', // Cookie is accessible across the entire site.
maxAge: 60 * 60 * 24 * 30, // Cookie expires in 30 days.
sameSite: 'lax', // Prevents cookies from being sent with cross-site requests.
secure: true, // Ensures cookies are only sent over HTTPS.
⋮----
// Removes a cookie by setting its expiration date to the past.
// Security note: The `secure` and `sameSite` attributes are retained to ensure consistent behavior.
⋮----
path: '/', // Ensure the cookie is removed site-wide.
expires: new Date(0), // Expire the cookie immediately.
sameSite: 'lax', // Retain the sameSite attribute for security.
secure: true, // Retain the secure flag for HTTPS.
⋮----
// Type definition for the window object with supabase client
interface WindowWithSupabase extends Window {
  supabase?: typeof supabase;
}
⋮----
// Make Supabase available on window object for debugging in development
// This is only intended for development purposes and should not be relied upon in production.
⋮----
// Add to window object for debugging
```

## File: src/main.tsx
```typescript
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
⋮----
// Set Excalidraw asset path dynamically based on build configuration
⋮----
import MainLayout from './components/layout/MainLayout'
import { AuthProvider } from './contexts/AuthContext'
import { SessionLogProvider } from './contexts/session-log-context'
import { ProjectManager } from './components/project-manager'
import { ProjectProvider } from './contexts/ProjectContext'
import LoginPage from './pages/LoginPage'
import AuthCallbackPage from './pages/AuthCallbackPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import { TimerProvider } from './contexts/TimerContext.tsx'
import { SettingsProvider } from './contexts/SettingsContext.tsx'
import { Toaster } from '@/components/ui/toaster.tsx'
import WebhookTestPage from './pages/WebhookTestPage'
import { SettingsPage } from './pages/SettingsPage'
import { TimerView } from './components/TimerView'
import ProjectOverviewPage from './pages/ProjectOverviewPage' // Import the new component
⋮----
// Dynamically import VisualReports assuming it's a NAMED export
⋮----
// Dynamically import Whiteboard components to reduce bundle size
⋮----
// Dynamically import Integration components (assuming named exports)
⋮----
// Re-add dynamic import for WebhookIntegration
⋮----
{/* Added route for the whiteboard page */}
⋮----
{/* Added test route for the whiteboard */}
```

## File: src/components/settings/FeatureAccessSettings.tsx
```typescript
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { checkUserFeatureAccess, getUserFeatures, grantUserFeature, revokeUserFeature } from '@/lib/supabase/userFeatures';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
⋮----
// Add more features as needed
⋮----
const checkAdminAccess = async () =>
⋮----
const fetchUserFeatures = async () =>
⋮----
setUserFeatures([]); // Clear previous user features
⋮----
const handleFeatureToggle = async (featureName: string, enabled: boolean) =>
⋮----
// Update the local features list
⋮----
checked=
```

## File: src/components/tasks/TaskItem.tsx
```typescript
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { 
  X, Edit3 as EditIcon, Calendar as CalendarIcon, MoreVertical, ChevronDown, ChevronUp,
  GripVertical,
  Trash2,
  Save,
  Plus,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { UITask } from '@/lib/types/task';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
⋮----
interface TaskItemProps {
  task: UITask;
  subtasks: UITask[]; 
  isSelected: boolean;
  isEditing: boolean;
  editedTaskTextValue: string;
  editedTaskDurationValue: string;
  editedTaskDescriptionValue: string;
  editedTaskNotesValue: string;
  onSelect: () => void;
  onToggleComplete: () => void;
  onDelete: () => void;
  onStartEdit: () => void;
  onCancelEdit: () => void;
  onSaveEdit: () => void;
  onEditedTaskTextChange: (value: string) => void;
  onEditedTaskDurationChange: (value: string) => void;
  onEditedTaskDescriptionChange: (value: string) => void;
  onEditedTaskNotesChange: (value: string) => void;
  onEditInputKeyDown: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onOpenDueDateModal: () => void;
  onSetPriority: (priority: number) => void;
  getPriorityIconElement: (priority: number, className?: string) => React.JSX.Element | null;
  isTaskOverdueValue: boolean;
  formattedDueDateValue: string | null;
  onOpenSubtaskModal: () => void; 
  onToggleSubtaskComplete: (subtaskId: string) => void; 
}
⋮----
const checkOverflow = () =>
⋮----
const handlePriorityChange = (newPriority: number) =>
⋮----
<Input id=
⋮----
<div className="pl-10"><Textarea id=
⋮----
// Default (non-editing) view - This is the original structure that should be used.
⋮----
ref={setNodeRef}      // DND Ref
style={style}         // DND Style (for transform and transition, opacity is also here now)
// Removed initial/animate/exit specific to TooltipProvider from previous version
// DNDKit handles the movement, framer-motion can handle appear/disappear if needed but keep simple first
layout                // Framer Motion layout animation
⋮----
// isDragging style (like opacity or z-index) is handled by `style` prop from useSortable and inline style here
⋮----
onClick={onSelect}      // Main click action
onDoubleClick={onStartEdit} // Double click to edit
⋮----
// {...attributes} and {...listeners} are typically applied to the drag handle, not the main container
⋮----
{/* Drag Handle - listeners and attributes go here */}
⋮----
onCheckedChange={() => onToggleComplete()} // Simplified from previous edit
⋮----
{/* Main Task Info Div */}
⋮----
<button onClick=
⋮----
{/* Collapsible description and notes preview */}
⋮----

⋮----
{/* Action Buttons Container */}
⋮----
{/* Expanded Content Area */}
⋮----
// Helper icon components
```

## File: src/components/todoist-integration.tsx
```typescript
import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, XCircle, Link, Import, RefreshCw, LogIn } from 'lucide-react';
import useProjects from '@/hooks/useProjects';
import { fetchSupabaseTasks, upsertSupabaseTasks } from '@/lib/supabase/tasks';
import { useAuth } from '@/hooks/useAuth';
import type { SupabaseClient } from '@supabase/supabase-js';
import { BorderContainer } from '@/components/ui/border-container';
⋮----
// Interfaces for Todoist data
export interface TodoistTask {
  id: string; // Source Todoist ID
  content: string;
  completed: boolean;
  project_id: string;
  project_name?: string;
  due?: {
    date: string;
    string: string;
  };
}
⋮----
id: string; // Source Todoist ID
⋮----
// Interface for tasks being prepared for import
interface TaskForImport {
  text: string;
  duration: number;
  due_date?: string;
}
⋮----
// Define a type for Todoist API error
interface TodoistApiError {
  message: string;
  [key: string]: unknown;
}
⋮----
// Define a type for Todoist API response
interface TodoistApiTaskData {
  id: string;
  content: string;
  is_completed: boolean;
  project_id: string;
  due?: {
    date: string;
    string: string;
  };
}
⋮----
const [tasks, setTasks] = useState<TodoistTask[]>([]); // Display tasks (mapped from DB)
const [selectedTasks, setSelectedTasks] = useState<string[]>([]); // Holds source IDs
⋮----
// Load tasks from Supabase - defined with useCallback to be used in dependency arrays
⋮----
// TODO: Fetch project names from Todoist API if needed and map here
⋮----
}, [toast]); // Include dependencies that are used inside the function
⋮----
// Effect to load tasks when user or supabase client is available
⋮----
// Ensure we have both user and client, and auth isn't loading
⋮----
setTasks([]); // Clear tasks if no token
⋮----
// If not loading, but no user/client, ensure disconnected state
⋮----
// Dependency array: Re-run when user, client, or loading status changes
⋮----
// Load app's tasks for the active project when it changes or on mount
⋮----
// Fetch from Todoist API, Upsert to DB, Reload from DB
const fetchAndSyncTasks = async () =>
⋮----
// Connect to Todoist (save token, trigger sync)
const handleConnect = async () =>
⋮----
// Disconnect from Todoist
const handleDisconnect = () =>
⋮----
// Toggle task selection
const toggleTaskSelection = (taskId: string) =>
⋮----
// Import selected tasks
const importSelectedTasks = async () =>
⋮----
if (!activeProject?.id) { // Check activeProject and its id
⋮----
// Map Todoist tasks to the structure needed for comparison and adding
// Note: `id` here is the Todoist source ID, not the app\'s task ID yet.
⋮----
duration: DEFAULT_TASK_DURATION, // Or derive from Todoist if available
⋮----
// Use currentProjectTasks from context for existing tasks
⋮----
setSelectedTasks([]); // Clear selection even if nothing new was imported
⋮----
const importPromises = tasksToAdd.map(task => // task here is an element from appFormattedTodoistTasks
⋮----
project_id: activeProject.id, // Safe due to check above
due_date: task.due_date, // Added: Pass due_date to context
}).then(addedTask => addedTask ? 1 : 0) // Convert to 1 if added, 0 otherwise
⋮----
setSelectedTasks([]); // Clear selection after import
// Consider reloading tasks if currentProjectTasks doesn't update automatically
// await loadTasksForProject(activeProject.id);
⋮----
// --- Render Logic ---
⋮----
disabled={authLoading || !supabase || !currentUser} // Disable if auth loading, no client, or no user
⋮----
// === Connected View ===
⋮----
{/* Loading State */}
⋮----
// No Tasks State
⋮----
// Display Tasks List
⋮----
checked=
⋮----
{/* TODO: Add project name mapping if important */}
⋮----
// === Not Connected View ===
⋮----
{/* === Todoist Login Dialog === */}
```

## File: src/contexts/ProjectContextType.ts
```typescript
import { createContext } from 'react';
import { Json } from '@/lib/supabase/database.types';
⋮----
// Import UITask and Reminder from their original definition
import { UITask as LibUITask, Reminder as LibReminder } from '@/lib/types/task';
⋮----
// Re-define or re-export them for use in this module and for export
export type UITask = LibUITask;
export type Reminder = LibReminder;
⋮----
// Define the Project interface
export interface Project {
  id: string;
  name: string;
  description: string;
  color: string;
  totalTimeSeconds: number;
  isActive: boolean;
  status: string;
  user_id?: string;
  created_at?: string;
  updated_at?: string;
  whiteboard_id?: string | null; // Added for whiteboard feature
}
⋮----
whiteboard_id?: string | null; // Added for whiteboard feature
⋮----
// Interface for DB format (snake_case)
export interface DbProject {
  id: string;
  name: string;
  description: string | null;
  color: string;
  total_time_seconds: number;
  tasks: Json; // This refers to the OLD jsonb column, will be ignored by dbToAppProject
  is_active: boolean;
  status: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  whiteboard_id?: string | null; // Added for whiteboard feature
}
⋮----
tasks: Json; // This refers to the OLD jsonb column, will be ignored by dbToAppProject
⋮----
whiteboard_id?: string | null; // Added for whiteboard feature
⋮----
// Define the context props
export interface ProjectContextProps {
  projects: Project[];
  loading: boolean; // General loading for the projects list
  error: string | null;
  currentProjectTasks: UITask[]; // Should now use the locally exported UITask
  tasksForProjectId: string | null; 
  isLoadingTasksForProject: boolean; 
  loadTasksForProject: (projectId: string) => Promise<void>;
  getProjectById: (id: string) => Project | undefined; // Added this line
  addProject: (
    projectData: Omit<Project, 'id' | 'user_id' | 'status' | 'totalTimeSeconds' | 'isActive' | 'created_at' | 'updated_at' | 'whiteboard_id'>
  ) => Promise<Project | null>;
  updateProject: (
    projectId: string,
    updates: Partial<Omit<Project, 'id' | 'user_id' | 'totalTimeSeconds' | 'created_at' | 'updated_at'>>
  ) => Promise<Project | null>;
  deleteProject: (id: string) => Promise<boolean>;
  toggleProjectActive: (id: string) => Promise<boolean | undefined>;
  updateProjectStatus: (
    id: string,
    status: 'active' | 'completed' | 'archived'
  ) => Promise<Project | null>;
  refetchProjectData: () => Promise<void>;
  setActiveProject: (id: string) => Promise<boolean | undefined>;

  // Task specific functions
  addTaskToContext: (
    taskData: Omit<UITask, 'id' | 'order' | 'completed' | 'priority' | 'due_date' | 'reminder' | 'description' | 'notes' | 'parent_task_id'> & { 
      text: string; 
      duration: number;
      project_id: string; 
      parent_task_id?: string | null; 
      priority?: number;
      due_date?: string | null;
      reminder?: UITask['reminder']; // Should use locally exported UITask and Reminder
      description?: string;
      notes?: string;
    }
  ) => Promise<UITask | null>;
  updateTaskInContext: (
    taskId: string,
    updates: Partial<Omit<UITask, 'id' | 'project_id' | 'user_id'>> 
  ) => Promise<UITask | null>;
  deleteTaskFromContext: (taskId: string) => Promise<boolean>;
  reorderTasksInContext: (orderedTasks: UITask[], projectId: string) => Promise<void>;
}
⋮----
loading: boolean; // General loading for the projects list
⋮----
currentProjectTasks: UITask[]; // Should now use the locally exported UITask
⋮----
getProjectById: (id: string) => Project | undefined; // Added this line
⋮----
// Task specific functions
⋮----
reminder?: UITask['reminder']; // Should use locally exported UITask and Reminder
⋮----
// Create the context
```

## File: src/utils/date-utils.ts
```typescript
import { format, isPast, isToday, isTomorrow } from 'date-fns';
⋮----
// Define interfaces for the window extensions
interface DebugFunctions {
  testReminderTime: (timeString: string, type?: string) => boolean;
  inspectTaskNotifications: () => Array<{
    projectName: string;
    projectId: string;
    task: {
      id: string;
      text: string;
      completed: boolean;
      due_date?: string | null;
      reminder?: {
        type: string;
        time?: string | null;
      } | null;
    };
  }>;
  inspectSupabaseNotifications: () => Promise<Array<{
    projectName: string;
    projectId: string;
    task: {
      id: string;
      text?: string;
      completed?: boolean;
      due_date?: string | null;
      reminder?: {
        type: string;
        time?: string | null;
      } | null;
      project_id: string;
    };
  }>>;
  resetNotificationHistory: () => string;
  syncNotificationToggle: (enabled: boolean) => string;
}
⋮----
type WindowWithDebugFunctions = Window & typeof globalThis & DebugFunctions;
⋮----
// Add a quick check function for debugging
export const testReminderTime = (timeString: string, type: string = 'on_due_date'): boolean =>
⋮----
// Create a test task
⋮----
due_date: new Date().toISOString(), // Today
⋮----
// Call shouldTriggerReminder and log the result
⋮----
// Make this function available globally for debugging in console
⋮----
// Function to forcibly reset notification history to allow testing
⋮----
// First, enable notifications if they're disabled
⋮----
// Clear the notification history to allow new notifications immediately
⋮----
// Set last check time to far in the past to force immediate check
⋮----
// Force a check for debugging
⋮----
// Dispatch an event to notify components
⋮----
// Function to sync UI toggle with localStorage
⋮----
// Update localStorage
⋮----
// Dispatch an event to notify components
⋮----
// Function to inspect a specific task from localStorage
⋮----
// Check notification settings
⋮----
// Check browser notification permission
⋮----
// Check notified tasks
⋮----
// Check all projects and tasks
⋮----
// Track tasks with reminders
interface TaskWithReminder {
        projectName: string;
        projectId: string;
        task: {
          id: string;
          text: string;
          completed: boolean;
          due_date?: string | null;
          reminder?: {
            type: string;
            time?: string | null;
          } | null;
        };
      }
⋮----
// Check each project for tasks
⋮----
// Find tasks with reminders
⋮----
// Test if this should trigger now
⋮----
// Supabase reminder inspection function
⋮----
// Get Supabase client from window (should be available since it's initialized in the app)
// @ts-expect-error - Access Supabase from window for debugging
⋮----
// Check if user is logged in
⋮----
// Get notification settings from localStorage
⋮----
// Check browser notification permission
⋮----
// Get notified tasks from localStorage (the tracking map)
⋮----
// Fetch projects
⋮----
interface SupabaseTask {
        id: string;
        text?: string;
        completed?: boolean;
        due_date?: string | null;
        reminder?: {
          type: string;
          time?: string | null;
        } | null;
        project_id: string;
      }
⋮----
// Track tasks that should trigger notifications
⋮----
// Process each project
⋮----
// Fetch tasks for this project
⋮----
// Find tasks with reminders
⋮----
// Check each task with a reminder
⋮----
// Check if this task should trigger a notification
⋮----
// Map the task ID to any entry in the notifiedTasksMap
⋮----
export const formatDueDate = (dueDateString: string): string =>
⋮----
export const isTaskOverdue = (dueDateString: string | null | undefined, completed: boolean): boolean =>
⋮----
/**
 * Checks if a task's reminder criteria are met based on its due_date and reminder settings.
 * @param task The task object, including due_date and reminder.
 * @param now The current time (timestamp or Date object) for comparison.
 * @returns True if a reminder should be triggered, false otherwise.
 */
export const shouldTriggerReminder = (task:
⋮----
// For debugging
⋮----
const reminderTimeString = task.reminder.time; // Expected format HH:mm or ISO string
⋮----
// Set up a default due time if none specified (default to end of day)
⋮----
// If no specific time, default due time is end of day (5:00 PM)
⋮----
// Calculate when the reminder should trigger
⋮----
// Adjust reminderDateTime based on reminderType
⋮----
// If time provided, use it
⋮----
// Default to morning of due day (9:00 AM)
⋮----
// Set to one day before the due date
⋮----
// Default to 9:00 AM the day before
⋮----
// If there's a specific due time, remind an hour before that
⋮----
// Set reminder one hour before
⋮----
// If no specific time, use 1 hour before the default due time (5:00 PM → 4:00 PM)
⋮----
// For custom, the reminder time should be an exact date/time
⋮----
// If it's HH:MM format on the due date
⋮----
// Parse the ISO string
⋮----
// Create a new date directly from the ISO string
⋮----
// Use the custom date directly - this is crucial for timezone handling
⋮----
// Compare reminder time with now for debug
⋮----
// If custom has no time, default to 9:00 AM on due date
⋮----
return false; // Unknown reminder type
⋮----
// Should trigger if:
// 1. Current time is at or after the reminder time
// 2. But not more than 3 days past the reminder time (to avoid repeated triggers)
// 3. And not more than 24 hours past the due date (to stop triggering long after due)
⋮----
// 3 days in milliseconds for reminder window (increased from 24 hours)
⋮----
// 24 hours in milliseconds for past-due cutoff (increased from 6 hours)
⋮----
// Log in a readable format
⋮----
// A reminder should trigger if:
⋮----
// Now is at or after the reminder time
nowTime >= reminderTimestamp && // MODIFIED: removed bufferTime
// And we're not too far past the reminder time (within window)
⋮----
// And we're not too far past the due time
⋮----
// For buffer debugging
// REMOVED bufferTime related logging
// if (bufferTime > 0) {
//   console.log('  Using 2 minute buffer for custom reminder');
//   console.log('  Adjusted condition 1 with buffer:', nowTime >= (reminderTimestamp - bufferTime));
⋮----
//   // Add more detailed timing information for custom reminders
//   const minutesDifference = Math.round((reminderTimestamp - nowTime) / (60 * 1000));
//   if (Math.abs(minutesDifference) <= 5) {
//     console.log(`  🔔 CLOSE TO TRIGGER TIME! Only ${minutesDifference} minutes ${minutesDifference >= 0 ? 'until' : 'after'} reminder time`);
//   }
// }
```

## File: src/components/project-manager.tsx
```typescript
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { 
  Plus, Edit, Trash2, Clock, Briefcase, CheckCircle2, Archive, 
  ArchiveRestore, MoreVertical, Play, Pause, ExternalLink
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { useToast } from '@/hooks/use-toast';
import useProjects from '@/hooks/useProjects';
import { Project } from '@/contexts/ProjectContextType';
import { useTimer } from '@/hooks/useTimer';
import { cn } from "@/lib/utils";
import { BorderContainer } from '@/components/ui/border-container';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SketchPicker } from 'react-color';
⋮----
import { formatErrorMessage } from '@/utils/errorUtils';
⋮----
// Quick styles for dark theme SketchPicker
// const sketchPickerStyles = `
//   .sketch-picker {
//     background: hsl(var(--card)) !important;
//     border-radius: var(--radius) !important;
//     box-shadow: none !important;
//     padding: 0.5rem !important;
//   }
//   .sketch-picker label,
//   .sketch-picker .flexbox-fix span {
//     color: hsl(var(--card-foreground)) !important;
//     font-family: inherit !important;
//   }
//   .sketch-picker input {
//     background: hsl(var(--input)) !important;
//     color: hsl(var(--foreground)) !important;
//     border: 1px solid hsl(var(--border)) !important;
//     border-radius: var(--radius) !important;
//     box-shadow: none !important;
//     font-family: inherit !important;
//     padding: 0.3em 0.5em !important;
//     text-align: center;
//   }
//   /* Style the preset color swatches */
//   .sketch-picker > div:last-child > div:last-child > div > div {
//     border-radius: calc(var(--radius) / 2) !important;
//     overflow: hidden !important;
//     box-shadow: none !important;
//     border: 1px solid hsl(var(--border) / 0.5) !important;
//   }
// `;
⋮----
// Effect to update the timer's active project ID whenever the projects list changes
⋮----
// Project colors to choose from - using less saturated Tailwind shades
⋮----
'#b5b0e0', // Softer Purple (closer to violet-400)
'#a2d8b7', // Lighter Green (green-300)
'#e4c96a', // Softer Yellow (yellow-300)
'#e2a66d', // Softer Orange (orange-400)
'#7caed4', // Softer Blue (blue-400)
'#e28c8c', // Softer Red (red-400)
'#7dcfc0', // Lighter Teal (teal-300)
'#e2bb6d', // Softer Gold/Amber (amber-400)
⋮----
// Format seconds to readable time
const formatTime = (totalSeconds: number) =>
⋮----
// Add or update a project
const handleSaveProject = async () =>
⋮----
// Create new project
⋮----
// Update existing project
⋮----
// Reset form
⋮----
// Error handled gracefully without logging
⋮----
// Delete a project
const handleDeleteProject = async (id: string) =>
⋮----
// Error handled gracefully without logging
⋮----
// Toggle project active state
const handleToggleProjectActive = async (projectIdToToggle: string) =>
⋮----
const wasActive = projectToToggle.isActive; // State before toggle
⋮----
// toggleProjectActive in useProjects is now expected to handle making this project
// the sole active project if it's being activated,
// or deactivating it if it's already active (and no other project becomes active).
// It also reloads the projects list.
⋮----
// toggleProjectActive from the context now returns a boolean indicating the success of the operation.
// The useEffect above will handle setActiveProjectIdForTimer based on the refreshed projects list.
⋮----
if (toggleResult) { // If the operation was successful
if (!wasActive) { // If it was inactive, the intention was to activate
⋮----
} else { // If it was active, the intention was to deactivate
⋮----
// Handle case where toggleProjectActive itself indicates failure
⋮----
setActiveProjectIdForTimer(null); // Clear active project on error
⋮----
// Open edit dialog
const openEditDialog = (project: Project) =>
⋮----
// Reset form fields
const resetForm = () =>
⋮----
// Open add dialog
const openAddDialog = () =>
⋮----
// Move variable outside of JSX for cleaner code
⋮----
className=
```

## File: src/components/tasks/GlobalTaskNotificationSystem.tsx
```typescript
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabaseClient'; // Import the global supabase client
import { getTasksByProjectIdFromDb, DbAppTask } from '@/lib/supabase/tasks'; // Assuming DbAppTask is the type returned
import { Project } from '@/contexts/ProjectContextType'; // Import Project type
import { UITask, Reminder } from '@/lib/types/task';
import { shouldTriggerReminder } from '@/utils/date-utils'; // MODIFIED: Only shouldTriggerReminder
import {
  StoredNotification,
  // TaskNotification, // Not directly used as a type, StoredNotification covers it
  // SystemNotification, // Not directly used as a type
  // AccountNotification, // Not directly used as a type
  // GenericNotification, // Not directly used as a type
  // NotificationCategory, // Used by StoredNotification
  // NotificationType, // Used by StoredNotification
  TaskNotificationType,
  generateNotificationId
} from '@/lib/types/notifications'; // Import new notification types
⋮----
// TaskNotification, // Not directly used as a type, StoredNotification covers it
// SystemNotification, // Not directly used as a type
// AccountNotification, // Not directly used as a type
// GenericNotification, // Not directly used as a type
// NotificationCategory, // Used by StoredNotification
// NotificationType, // Used by StoredNotification
⋮----
} from '@/lib/types/notifications'; // Import new notification types
import {
  SystemNotificationType,
  AccountNotificationType,
  GenericNotificationType
} from '@/lib/types/notifications';
import { RealtimeChannel } from '@supabase/supabase-js'; // ADD THIS IMPORT
⋮----
// Helper to transform DB task format to UITask format (consider moving to a shared util if not already)
// For now, duplicating a simplified version or assuming getTasksByProjectIdFromDb returns UI-compatible tasks.
// Let's assume getTasksByProjectIdFromDb returns DbAppTask and we need a conversion.
// If dbTaskToUiTask is not exported from ProjectContext, we might need to redefine or import it.
// For simplicity, let's assume a direct mapping or that DbAppTask is close enough for notification purposes,
// or we'll need to ensure dbTaskToUiTask is accessible.
// NOTE: This is a placeholder. The actual conversion logic from ProjectContext.tsx might be needed here.
function dbTaskToUiTaskForNotifications(dbTask: DbAppTask): UITask
⋮----
// This is a simplified placeholder. Ideally, use the same robust converter.
⋮----
export const GlobalTaskNotificationSystem: React.FC = () =>
⋮----
// INSTEAD, we need to fetch projects separately if they are not available globally
// For now, let's assume `projects` are fetched or available elsewhere, or add a fetch here.
// This component might need its own project fetching logic if not passed via props or another context.
// Placeholder: Fetch projects directly. This is a simplified example.
⋮----
const [notificationInterval, setNotificationInterval] = useState(30); // Default 30 minutes
⋮----
// Replace the simple Set-based tracking with a more sophisticated system
⋮----
const realtimeChannelRef = useRef<RealtimeChannel | null>(null); // ADD THIS to store channel reference
⋮----
// Check notification permission on mount and load settings
⋮----
// Load notification settings from localStorage
⋮----
// Force sync UI toggle with localStorage
const syncNotificationSettings = () =>
⋮----
// Get current UI preference if available
⋮----
// If UI setting exists but doesn't match localStorage, update localStorage
⋮----
// If they don't match, update localStorage to match UI
⋮----
// Otherwise follow localStorage
⋮----
// Enable notifications by default if not set
⋮----
// Fall back to default behavior
⋮----
// Run the sync on mount
⋮----
// Watch for changes to the notification toggle in the UI
// This uses a MutationObserver to detect when the toggle changes
const setupToggleObserver = () =>
⋮----
// Give the UI time to render
⋮----
// Create a new observer
⋮----
// Update localStorage and our internal state
⋮----
// Dispatch event for other components
⋮----
// Start observing
⋮----
}, 1000); // Wait for UI to be ready
⋮----
// Return cleanup function
⋮----
// Setup the observer
⋮----
// Also add listener for preference changes
⋮----
// Set a reasonable default interval (15 minutes)
⋮----
// Request notification permission if needed
⋮----
// Using user information to personalize permission messages if available
⋮----
// Save notification locally
⋮----
const storedNotifications = localStorage.getItem('allNotifications'); // Changed key for clarity
⋮----
// Dispatch a custom event to notify other parts of the app (e.g., NotificationPanel)
⋮----
// Use setTimeout to ensure the event fires after the state is updated in localStorage
⋮----
// Show toast notification (can be used as a fallback or for generic messages)
⋮----
// Unified function to trigger and store a notification
⋮----
console.log('\\nAttempting to trigger notification (Realtime or Polled):'); // Modified log
⋮----
type: notificationData.type as SystemNotificationType, // Corrected type
⋮----
type: notificationData.type as AccountNotificationType, // Corrected type
⋮----
type: notificationData.type as GenericNotificationType, // Corrected type
⋮----
// Skip category check in default case since TypeScript sees notificationData.category as 'never' here
⋮----
// Create a generic notification as fallback
⋮----
// Attempt to show native desktop notification
⋮----
icon: newNotification.icon || '/favicon.ico', // Use provided icon or default
tag: newNotification.id, // Use unique ID as tag to prevent duplicates if needed or manage updates
⋮----
// If there's an action URL, navigate. Otherwise, specific handling might be needed.
⋮----
// Potentially navigate or emit an event for in-app navigation
// For now, we can just log it or have NotificationPanel handle it.
⋮----
// If it's a task notification, we might want to emit an event for task selection
⋮----
// This part needs to connect to the main app's navigation/selection logic
// For now, clicking the desktop notification focuses the window.
// The in-app notification panel will handle the actual task selection.
⋮----
// Fallback to a toast if native fails, but still save the in-app notification
⋮----
if (notificationData.category === 'task') { // Only show toast fallback for tasks if permission not granted
⋮----
// Save the notification for in-app display (NotificationPanel)
⋮----
// Supabase Realtime subscription for custom reminders
⋮----
if (user && notificationEnabled) { // Supabase client is stable, removed from deps
⋮----
// MODIFIED: Handle multiple event types from server
⋮----
// Optionally, you might want to attempt to resubscribe here with a backoff strategy
⋮----
// If no user or notifications disabled, ensure any existing channel is cleaned up
⋮----
}, [user, notificationEnabled, triggerNotification]); // Removed supabase from deps
⋮----
// Debug helper function to test notifications directly - placed after triggerNotification is defined
⋮----
// This adds a debug function to the window for direct testing
⋮----
// Create a test notification
⋮----
// Add a function to directly check notification settings
⋮----
// Toggle notifications if needed
⋮----
// Force check for notifications now
⋮----
lastCheckRef.current = 0; // Reset last check time
⋮----
// Call the actual check function - defined in the effect below
// We can't directly reference it because it's defined in another effect
// So create a way to trigger a check by changing the condition that leads to it
⋮----
// Cleanup the debug function when component unmounts
⋮----
// Load tasks for all projects (for overdue, due_soon, and other non-custom reminders via polling)
⋮----
// Clear tasks if notifications are off or no user/projects
⋮----
const loadAllProjectTasks = async () =>
⋮----
// Use the direct DB call
⋮----
// Convert DbAppTask to UITask
⋮----
// Log detailed info about tasks with reminders
⋮----
// Reload all project tasks on an interval (every 10 minutes)
const tasksReloadInterval = setInterval(loadAllProjectTasks, 10 * 60 * 1000); // Keep this for non-custom, or adjust as needed
⋮----
}, [notificationEnabled, user, projects, allProjectTasks.size]); // Added allProjectTasks.size to deps
⋮----
// Load notified tasks from localStorage
⋮----
// Convert the stored object back to a Map
⋮----
// Fix the type casting to ensure we get a Map<string, number>
⋮----
// Save notified tasks to localStorage
⋮----
// Convert Map to an object for storage
⋮----
// Clean up old notified tasks (older than 3 days)
⋮----
// Run cleanup occasionally
⋮----
// Cleanup on mount and every 12 hours
⋮----
// Process task for potential notifications (Primarily for non-custom reminders now)
⋮----
// Custom reminders, Overdue, and Due Soon are now handled by Supabase Realtime via Edge Function.
// This function will now primarily handle other non-custom, non-realtime (polled) reminders.
⋮----
// Check for Reminders FIRST - using the improved shouldTriggerReminder function
⋮----
// Overdue and Due Soon logic is REMOVED from here as it's server-handled.
⋮----
// Default frequency for polled reminders (e.g., on_due_date, day_before, hour_before)
// These are less critical than server-pushed ones, so a longer default frequency is fine.
const notificationFrequency = 6 * 60 * 60 * 1000; // 6 hours
⋮----
}, [notifiedTasksMap, saveNotifiedTasksMap, triggerNotification]); // MODIFIED: Removed notificationPermission, notificationEnabled
⋮----
// Check for tasks that need notifications across all projects (for non-custom reminders)
⋮----
const checkAllProjectTasks = async () =>
⋮----
// console.log('[NOTIFICATION] Forced check detected'); // Reduced verbosity
⋮----
// console.log('[NOTIFICATION] Using stored last check time:', new Date(storedTime).toLocaleString()); // Reduced verbosity
⋮----
// console.log('[NOTIFICATION] No tasks loaded yet, skipping notification check'); // Reduced verbosity
⋮----
// console.log('[NOTIFICATION] Notification permission not granted, skipping notification check'); // Reduced verbosity
⋮----
// console.log(`\n[NOTIFICATION] Starting notification check at ${new Date().toLocaleTimeString()}`); // Reduced verbosity
// console.log(`[NOTIFICATION] Notification settings - enabled: ${notificationEnabled}, interval: ${notificationInterval} minutes`);
// console.log(`[NOTIFICATION] Checking ${allProjectTasks.size} projects for (polled) notifications`);
⋮----
// ... (summary logging can be kept or removed based on preference)
// let totalTasksChecked = 0;
// ... (rest of summary variables)
⋮----
// console.log(`[NOTIFICATION] Checking project "${project.name}" (${tasks.length} tasks)`); // Reduced verbosity
⋮----
// ... (summary counters can be updated here if kept)
// totalTasksChecked++;
⋮----
// Ensure we only process non-custom reminders here
⋮----
return; // Skip custom reminders in client-side polling
⋮----
// console.log(`[NOTIFICATION] Check complete - ${totalTasksChecked} tasks checked`); // Reduced verbosity
// ... (rest of summary logging)
⋮----
// Initial check
⋮----
// Set up interval - check more frequently (every 30 seconds) to be more responsive
const intervalId = setInterval(checkAllProjectTasks, pollingCheckIntervalMs); // Use the defined interval
⋮----
// supabase // supabase is stable, can be removed from deps if not directly used in effect body
⋮----
// Reset notified tasks when projects change
⋮----
// Clear the notifications related to any project that no longer exists
⋮----
// Check each task key and remove those for projects that no longer exist
updatedMap.forEach((_timestamp, key) => { // Changed timestamp to _timestamp as it's unused
⋮----
// This component doesn't render anything
```

## File: src/components/Whiteboard.tsx
```typescript
// NOTE: This file is intentionally added to .eslintignore because we're using TypeScript
// workarounds for Excalidraw components. The code works correctly at runtime, but there are
// import compatibility issues with the Excalidraw type definitions.
⋮----
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Excalidraw, 
  MainMenu, 
  WelcomeScreen
} from '@excalidraw/excalidraw';
⋮----
import { getWhiteboardByProjectId, saveWhiteboard } from '../lib/supabase/whiteboards';
import { debounceExcalidraw } from '../lib/utils/debounce-excalidraw';
import { WhiteboardDataFromSupabase } from '../lib/types/excalidraw-types';
⋮----
interface WhiteboardProps {
  projectId: string;
  userId: string;
}
⋮----
// Ensure data is cast correctly, assuming it fits WhiteboardDataFromSupabase
⋮----
setInitialData({ elements: [] }); // Default to empty elements if no data or malformed
⋮----
setInitialData({ elements: [] }); // Fallback to empty on error
⋮----
// Consolidate debounced save logic within the useRef initialization
// Using a specialized debounce function for Excalidraw elements
⋮----
const dataToSave = { elements: elementsArray }; // We primarily care about saving elements
⋮----
// Cleanup function to cancel the debounced save on component unmount
⋮----
// Create Excalidraw component with proper type assertions
⋮----
onChange=
// Call the debounced function from the ref with the elements array
debouncedSaveRef.current.debounced(elements);
⋮----
// Ensure key is stable or updates appropriately if initialData itself is the key trigger
```

## File: src/components/tasks/NotificationPanel.tsx
```typescript
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Bell, Check, Clock, AlertTriangle, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';
import { StoredNotification, TaskNotification } from '@/lib/types/notifications';
import logger from '@/lib/logger'; // Import the logger
⋮----
interface NotificationPanelProps {
  onSelectTask: (projectId: string, taskId: string) => void;
}
⋮----
// Load notifications from localStorage
⋮----
// Set up event listener for storage changes
const handleStorageChange = (e: StorageEvent) =>
⋮----
// Listen for the custom event from GlobalTaskNotificationSystem
const handleNotificationsUpdated = (e: Event) =>
⋮----
const handleNotificationsCleared = (e: Event) =>
⋮----
setNotifications([]); // Clear notifications in state
⋮----
window.addEventListener('notificationsCleared', handleNotificationsCleared); // Add event listener
⋮----
// Set up a polling interval to check for new notifications
const intervalId = setInterval(loadNotifications, 10000); // Check every 10 seconds
⋮----
window.removeEventListener('notificationsCleared', handleNotificationsCleared); // Remove event listener
⋮----
// Update unread count when notifications change
⋮----
// Load notifications from localStorage
const loadNotifications = () =>
⋮----
// Check if there are any in the old key for backward compatibility
⋮----
// Migrate to new key
⋮----
localStorage.removeItem('taskNotifications'); // Remove old key
⋮----
// Save notifications to localStorage
const saveNotifications = (updatedNotifications: StoredNotification[]) =>
⋮----
// Manually trigger a refresh since the storage event doesn't fire for the same window
⋮----
// Dispatch event to notify other components
⋮----
// Mark a notification as read
const markAsRead = (id: string) =>
⋮----
// Mark all notifications as read
const markAllAsRead = () =>
⋮----
// Remove a notification
const removeNotification = (id: string) =>
⋮----
// Clear all notifications
const clearAllNotifications = () =>
⋮----
// Handle task selection
const handleTaskSelect = (projectId: string, taskId: string, notificationId: string) =>
⋮----
// Format relative time
const formatTime = (timestamp: number) =>
⋮----
// Refresh notifications when panel is opened
const handleOpenChange = (open: boolean) =>
⋮----
// Get icon for notification type
const getNotificationIcon = (type: string): React.ReactElement =>
⋮----
// Attempt direct match first for exact types
⋮----
// Fallback for types that might contain keywords
// This maintains some flexibility if `type` isn't always an exact key
// If strict matching is required, these checks can be removed or adjusted.
⋮----
return <Bell className="h-4 w-4 text-primary" />; // Default icon
⋮----
handleTaskSelect(notification.projectId, notification.taskId, notification.id);
⋮----
e.stopPropagation();
removeNotification(notification.id);
```

## File: src/components/layout/Header.tsx
```typescript
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Loader2, X } from 'lucide-react';
import { useState, useEffect, useRef, useMemo } from 'react'; // Added useMemo
import { useNavigate } from 'react-router-dom'; // Add this import
import { NotificationPanel } from '@/components/tasks/NotificationPanel';
import useProjects from '@/hooks/useProjects';
import { useToast } from '@/hooks/use-toast';
import { performSiteSearch, SiteSearchResult } from '@/lib/site-search';
import { cn, debounce } from '@/lib/utils'; // Updated import
import { useAuth } from '@/hooks/useAuth';
import { useFeatureAccess } from '@/hooks/useFeatureAccess'; // Added import
import { Badge } from '@/components/ui/badge'; // Added import
//import { useSettings } from '@/hooks/useSettings';
⋮----
const { user } = useAuth(); // user is needed for userId
⋮----
// Use ref to store current user ID to avoid recreating debounced function
⋮----
// Update refs when values change
⋮----
}, [user?.id, toast]);  // Debounced search function
⋮----
// Use ref to get current userId
⋮----
[] // Empty dependency array - debounced function is stable
⋮----
// Cleanup function to cancel the debounced search on component unmount
⋮----
const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
⋮----
const clearSearch = () =>
⋮----
const handleSearchResultClick = (result: SiteSearchResult) =>
⋮----
const handleTaskSelectFromNotification = (projectId: string) =>
⋮----
e.preventDefault();
handleSearchResultClick(result);
⋮----
className=
⋮----
{/* User menu can be added here */}
```

## File: src/components/task-list.tsx
```typescript
import React, { useState, useEffect, Fragment, useMemo, useRef, useCallback, useLayoutEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import useProjects from '@/hooks/useProjects';
import { useAuth } from '@/hooks/useAuth';
import { BorderContainer } from '@/components/ui/border-container';
import { DueDateReminderModal } from '@/components/ui/due-date-reminder-modal';
import { useSettings } from '@/hooks/useSettings';
import {
  getTemplates,
  createTemplate,
  updateTemplate,
  deleteTemplate as deleteTemplateFromDB,
  Template as DbTemplate,
  TemplateTaskInsert
} from '@/lib/supabase/templates';
import { TaskInput } from '@/components/tasks/TaskInput';
import { TaskItem } from '@/components/tasks/TaskItem';
import { SaveTemplateDialog } from '@/components/tasks/SaveTemplateDialog';
import { ApplyTemplateDropdown } from '@/components/tasks/ApplyTemplateDropdown';
import { DeleteTemplateDialog } from '@/components/tasks/DeleteTemplateDialog';
import { EditTemplateDialog, EditableTemplateTask } from '@/components/tasks/EditTemplateDialog';
import { UITask, Reminder } from '@/lib/types/task';
import { formatDueDate, isTaskOverdue } from '@/utils/date-utils';
import { getPriorityIcon } from '@/utils/task-utils';
import { triggerWebhooks } from '@/utils/webhook-manager';
import { Clock, SortAsc, Filter, Calendar, ListFilter, Search, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { TaskNotificationSystem } from '@/components/tasks/TaskNotificationSystem';
import { AddSubtaskModal } from '@/components/tasks/AddSubtaskModal';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
  DragOverlay,
  defaultDropAnimation,
  UniqueIdentifier,
  MeasuringStrategy,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { WebhookEvent } from '@/components/webhook-integration';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';
⋮----
// NEW: Interface for tasks with depth information
interface DisplayTask extends UITask {
  depth: number;
}
⋮----
// UPDATED: Function to recursively build a flat list for display, adding depth
const buildDisplayList = (
  tasks: UITask[], // Takes original UITask[]
  hideCompletedFlag: boolean, // ADDED: Pass the hideCompleted state
  parentId: string | null = null,
  depth = 0
): DisplayTask[] => { // Returns DisplayTask[]
  let result: DisplayTask[] = [];
  (tasks || []) // Add a guard for tasks being potentially null/undefined during transitions
    .filter(task => task.parent_task_id === parentId)
    // Important: Don't re-sort by order here, maintain the input list's sort order
    // which is provided by getSortedTasks
    .forEach(task => {
      // If hiding completed tasks and this task is completed, skip it and its children.
if (hideCompletedFlag && task.completed)
⋮----
tasks: UITask[], // Takes original UITask[]
hideCompletedFlag: boolean, // ADDED: Pass the hideCompleted state
⋮----
): DisplayTask[] => { // Returns DisplayTask[]
⋮----
(tasks || []) // Add a guard for tasks being potentially null/undefined during transitions
⋮----
// Important: Don't re-sort by order here, maintain the input list's sort order
// which is provided by getSortedTasks
⋮----
// If hiding completed tasks and this task is completed, skip it and its children.
⋮----
result.push({ ...task, depth }); // Add depth to the task object
// Recursively call, passing the same hideCompletedFlag
⋮----
// NEW: Custom measuring configuration for more accurate drag operations
⋮----
// NEW: Custom drop animation with less movement
⋮----
interface TaskListProps {
  projectId: string;
  projectName: string;
  tasks: UITask[];
  selectedTaskId: string | null;
  onSelectTask: (taskId: string | null) => void;
  initialSearchTerm?: string;
}
⋮----
// Removed React.memo to allow natural re-renders for task updates
⋮----
// Debug logging
⋮----
// Use tasks directly without aggressive memoization
⋮----
// Lifecycle tracking
⋮----
// Track component mounting - runs once
⋮----
// Removed complex task update blocking logic - let React handle updates naturally
⋮----
// Using _setIsMounted naming to indicate intentional usage in useEffect
⋮----
// Drag and Drop State
⋮----
// Simplified initialSearchTerm handling
⋮----
// Only update searchTerm if initialSearchTerm is defined and different from current searchTerm
⋮----
// This revised logic prevents clearing user input if initialSearchTerm is undefined,
// and includes searchTerm in dependencies to fix the lint warning.
⋮----
const fetchUserTemplates = async () =>
⋮----
// Convert regular functions to useCallback to maintain referential stability
⋮----
if (newTaskText.trim() === '' || !projectId) return; // MODIFIED: Allow if projectId exists, regardless of user
⋮----
// REMOVED: user_id: user.id, // Context will handle user_id for logged-in users
priority: 0, // Default priority
⋮----
parent_task_id: null, // For root tasks created via main input
⋮----
// Send the update to the backend - context will handle UI updates
⋮----
// Show toast notification
⋮----
// Handle webhook if needed
⋮----
if (!projectId) return; // Should always have projectId here
⋮----
onSelectTask(null); // Deselect if the deleted task was selected
⋮----
// uiTasks will update via prop change from context
⋮----
const saveTemplate = async () =>
⋮----
const openEditDialog = (template: DbTemplate) =>
⋮----
const handleUpdateTemplate = async () =>
⋮----
const deleteTemplate = async (templateId: string) =>
⋮----
const confirmDeleteTemplate = async () =>
⋮----
const estimateFinishTime = () =>
⋮----
// Define getSortedTasks with proper types and remove the redundant implementation
⋮----
// Use state values directly instead of refs
⋮----
// If a selectedTaskId is provided via props, AND no initialSearchTerm was provided (which populates searchTerm),
// filter to only that task and its children. This allows highlighting/direct linking to a task *without* a search query.
// If initialSearchTerm (and thus searchTerm) IS present, the search filter below will take precedence.
⋮----
// IMPORTANT: We should only filter to the selectedTask if we're specifically searching for it
// Otherwise, we should show all tasks and just highlight the selected one
⋮----
const getAllDescendants = (taskId: string, allTasks: UITask[]): UITask[] =>
⋮----
// Apply internal search. This will now also work if searchTerm was set by initialSearchTerm.
⋮----
// Enhanced search: if a subtask matches, show its parent(s) and all siblings of matched parents
⋮----
const parentChains = new Set<string>(); // Track all parent IDs in the match chains
⋮----
// First pass: identify all matching tasks and their parent chains
⋮----
// Check if task text, description, or notes contains the search term
⋮----
// Add all parents in the chain
⋮----
// Second pass: if we found matches, filter to only include:
// 1. Tasks that match the search term
// 2. Any parent task in a chain leading to a match
// 3. All direct children of parents in match chains (siblings of matches)
⋮----
// Include the task if it matches directly
⋮----
// Include the task if it's a parent in a chain
⋮----
// Include the task if its parent is in the parent chain set (sibling of a match)
⋮----
// If search term is present but no matches found
⋮----
// If hiding completed tasks, filter them out.
// If a specific task was selected via URL (selectedTaskId is present) AND there's no active search (searchTerm is empty),
// we might want to show it regardless of its completed state.
// However, if there IS a searchTerm, the search result is king.
⋮----
// This part of hideCompleted logic might need refinement if we want to hide completed children of a selected task
// For now, if a task is selected by URL, it and all its children are shown, overriding hideCompleted for that selection.
⋮----
// Group tasks by their parent_task_id for hierarchical sorting
⋮----
// Separate tasks into groups by parent
⋮----
// Apply sorting to each group independently
const sortTaskGroup = (tasks: UITask[]): UITask[] =>
⋮----
// Apply the selected sort option
⋮----
// Always prioritize overdue tasks first regardless of sort type
⋮----
// Finally, fall back to the original order
⋮----
// Sort each group
⋮----
// Rebuild the flat list in a way that preserves hierarchy
⋮----
// Function to recursively add tasks and their children to the result array
const addTasksRecursively = (taskList: UITask[]) =>
⋮----
// Add children if they exist
⋮----
// Start with root tasks
⋮----
// Optimize the useMemo dependencies for the search and sort functions
⋮----
// Include all state values that affect sorting and filtering
⋮----
// More stable memoization for displayList
⋮----
// Use a stable dependency
⋮----
const handleUpdateTask = async () =>
⋮----
duration: parseInt(editedTaskDuration, 10) || undefined, // Keep original if parse fails
⋮----
setEditingTaskId(null); // Close editing mode
⋮----
const startEditing = (task: UITask) =>
⋮----
const cancelEditing = () =>
⋮----
const handleEditInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) =>
⋮----
const handleDialogTaskChange = (index: number, field: keyof Pick<EditableTemplateTask, 'task_name' | 'task_duration'>, value: string | number) =>
const handleRemoveDialogTask = (index: number)
const handleAddDialogTask = () => setEditedTasks(current => [...current,
⋮----
const setPriority = async (taskId: string, priority: number) =>
⋮----
const openDateReminderModal = (task: UITask) =>
⋮----
const handleSaveDueDateReminder = async (dueDate: string | null, reminderParam:
⋮----
const castedType = reminderParam.type as Reminder['type']; // Cast to Reminder['type']
⋮----
// Fallback to 'none' if type is invalid but reminderParam itself is not null
⋮----
// Explicitly null means remove reminder
⋮----
// If reminderParam is undefined or type is not string, validatedReminder remains null from initialization
⋮----
const handleOpenSubtaskModal = (parentTask: UITask) =>
⋮----
const handleAddSubtaskCallback = async (subtaskText: string, subtaskDuration: number, subtaskDescription?: string, subtaskNotes?: string) =>
⋮----
// MODIFIED: Guard condition to allow anonymous users if project and parent task exist.
⋮----
// REMOVED: user_id: user.id, // Context will handle user_id for logged-in users
⋮----
priority: parentTaskForSubtask.priority, // Inherit parent's priority or default
⋮----
// due_date, reminder can be set to null or inherited if desired
⋮----
setIsAddSubtaskModalOpen(false); // Close modal on success
⋮----
const handleToggleSubtaskComplete = async (taskId: string)
⋮----
// Improved sensors configuration with distance and delay thresholds
⋮----
// Add a small activation distance to prevent accidental drags
⋮----
distance: 5, // 5px movement required before drag starts
⋮----
const handleDragStart = (event: DragStartEvent) =>
⋮----
// Find the task being dragged
⋮----
const handleDragEnd = async (event: DragEndEvent) =>
⋮----
// Clear the active state
⋮----
if (activeId === overId) return; // No change if dropped on itself
⋮----
// IMPORTANT: Restrict reordering to within the same parent
⋮----
return; // Do not allow changing parent via drag-and-drop for now
⋮----
// Identify the list of siblings to reorder
⋮----
// Ensure both active and over tasks are in the identified sibling list (sanity check)
⋮----
// Update the order property for the reordered siblings
⋮----
// Create the new full state for uiTasks for optimistic update
const mapTaskToUpdatedVersion = (task: UITask): UITask =>
⋮----
// Show a more specific error message and don't let it crash the entire project loading
⋮----
// Since the reorder failed, we should refresh the tasks to get the correct order from the database
// This prevents the UI from showing an incorrect order
⋮----
// For DndContext, items should be the IDs of the currently rendered list
⋮----
// This memo will only recalculate if the task IDs actually change,
// not just when the tasksToDisplayFlat reference changes
⋮----
onSelectTask(null);
⋮----
{/* DragOverlay renders a consistent "ghost" of the dragged item */}
⋮----
isTaskOverdueValue=
formattedDueDateValue=
```

## File: src/contexts/ProjectContext.tsx
```typescript
import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '../lib/supabaseClient'; // Import the shared client instance
import { Project, DbProject, ProjectContext, ProjectContextProps } from './ProjectContextType';
import { UITask, Reminder } from '@/lib/types/task'; // Import UITask and Reminder
import { 
  createTaskInDb, 
  updateTaskInDb, 
  deleteTaskFromDb, 
  batchUpdateTaskOrderInDb,
  NewAppTaskData,
  UpdateAppTaskData,
  DbAppTask
} from '@/lib/supabase/tasks'; // Import new DB functions
⋮----
} from '@/lib/supabase/tasks'; // Import new DB functions
⋮----
// Helper to transform DB task format to UITask format
function dbTaskToUiTask(dbTask: DbAppTask): UITask { // Using DbAppTask type now
  // Parse the reminder field properly
  let reminderField: Reminder | null = null;
if (dbTask.reminder)
⋮----
// Parse the reminder field properly
⋮----
// Check if it has the right structure
⋮----
// Validate reminder type
⋮----
// Create the reminder object
⋮----
project_id: dbTask.project_id, // Added mapping for project_id
⋮----
reminder: reminderField, // Use parsed reminder
⋮----
// Helper to transform DB format to app format
function dbToAppProject(dbProject: DbProject): Omit<Project, 'totalTimeSeconds'>
⋮----
// Safely handle tasks - if tasks is not an array, provide an empty array
// const tasksData = Array.isArray(dbProject.tasks)
//   ? dbProject.tasks
//   : [];
⋮----
// Valid reminder types
// const validReminderTypes = ['day_before', 'hour_before', 'on_due_date', 'custom', 'none'];
⋮----
// tasks: tasksData.map(task => { ... }) // ENTIRE TASKS MAPPING LOGIC REMOVED
⋮----
whiteboard_id: null // Explicitly set to null as it's not directly on the projects table
// whiteboard_id: dbProject.whiteboard_id || null // OLD: Assumed projects table had this
⋮----
// Helper to transform app format to DB format
// function appToDbProject(project: Project): Partial<DbProject> {
//   return {
//     name: project.name,
//     description: project.description || null,
//     color: project.color,
//     total_time_seconds: project.totalTimeSeconds,
//     tasks: project.tasks,
//     is_active: project.isActive,
//     user_id: project.user_id
//   };
// }
⋮----
// Create the provider component
export const ProjectProvider: React.FC<React.PropsWithChildren<object>> = (
⋮----
// Helper functions for local project storage
⋮----
// Basic validation can be done here if needed, or rely on loadProjectsAndSessions validation
⋮----
// Create backup of corrupted data with timestamp
⋮----
// Set error state to notify user about data corruption
⋮----
// Show browser alert for immediate user notification
⋮----
localStorage.removeItem('kair0s_projects'); // Clear corrupted data after backup
⋮----
// Helper functions for local task storage
⋮----
// Create backup of corrupted data with timestamp
⋮----
// Set error state to notify user about data corruption
⋮----
// Show browser alert for immediate user notification
⋮----
localStorage.removeItem('kair0s_tasks'); // Clear corrupted data after backup
⋮----
if (user && user.id && supabase) { // Logged-in user
⋮----
} else if (!user) { // Anonymous user: load from localStorage
⋮----
}, [user, tasksForProjectId, getLocalTasks]); // MODIFIED: Removed supabase from dependencies
⋮----
if (!supabase && user) { // Check supabase only if user is logged in, as anonymous doesn't need it here
⋮----
if (!user) { // Anonymous user
⋮----
// Normalize projects to ensure all fields are present
⋮----
user_id: p.user_id || 'anonymous', // Should be 'anonymous'
⋮----
localStorage.removeItem('kair0s_projects'); // Clear corrupted data
⋮----
setProjects([]); // No local projects found
⋮----
}, [user]); // MODIFIED: removed supabase
⋮----
// Potentially also reload tasks for the currently viewed project if one is active
// const activeProjectId = projects.find(p => p.isActive)?.id;
// if (activeProjectId) await loadTasksForProject(activeProjectId);
}, [loadProjectsAndSessions/*, projects, loadTasksForProject*/]);
⋮----
// Migration logic extracted to a separate function for better testability and cleaner dependencies
⋮----
const projectIdMap = new Map<string, string>(); // Map local Project ID to Supabase Project ID
⋮----
p.id && p.id.startsWith('local-') && // Ensure it's a locally created one with an ID
⋮----
// whiteboard_id: p.whiteboard_id || null, // Removed as 'projects' table doesn't have this column
// Not including created_at, updated_at as DB handles them
⋮----
// If there are no local projects to migrate, but tasks exist for projects already in DB (less likely for purely local flow)
// Or if projects were migrated and mapped.
⋮----
if (supabaseProjectId) { // Only migrate tasks whose projects were successfully migrated and mapped
⋮----
user_id: user.id, // Authenticated user's ID
⋮----
parent_task_id: null, // Simplification: migrate as top-level. TODO: Map parent_task_id
⋮----
// Project was local and not migrated (e.g. duplicate name) or removed
⋮----
newProjectIdToLoadTasks = null; // clear
⋮----
// If newProjectIdToLoadTasks is not null, reload.
// It could be the original tasksForProjectId if it was already a Supabase ID,
// or the new Supabase ID if it was a migrated local project.
⋮----
// Trigger migration when user logs in and has Supabase access
⋮----
const addProject = async (
    projectData: Omit<Project, 'id' | 'user_id' | 'status' | 'totalTimeSeconds' | 'isActive' | 'created_at' | 'updated_at'>
): Promise<Project | null> =>
⋮----
if (!user) { // Anonymous user: Save to localStorage
⋮----
// whiteboard_id will be undefined if not provided in projectData, which is fine
⋮----
// Logged-in user: Save to Supabase (existing logic)
if (!supabase || !user.id) { // Check supabase and user.id here for logged-in path
⋮----
// eslint-disable-next-line @typescript-eslint/no-unused-vars
whiteboard_id, // Destructure to exclude from projectToInsert
⋮----
status: 'active', // Default status
is_active: false, // Default active state
total_time_seconds: 0, // Default time
⋮----
const updateProject = async (
    projectId: string,
    updates: Partial<Omit<Project, 'id' | 'user_id' | 'totalTimeSeconds' | 'created_at' | 'updated_at'>>
): Promise<Project | null> =>
⋮----
if (!user) { // Anonymous user: Update in localStorage
⋮----
// Logged-in user: Update in Supabase (existing logic)
if (!supabase || !user.id) { // Check supabase and user.id here for logged-in path
⋮----
// Ensure 'tasks' or other non-updatable fields are not in updates
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { tasks: _, whiteboard_id, ...validUpdates } = updates as Record<string, unknown>; // tasks was for old JSONB, also exclude whiteboard_id
⋮----
.eq('user_id', user.id) // Ensure user owns the project
⋮----
const deleteProject = async (id: string): Promise<boolean> =>
⋮----
if (!user) { // Anonymous user: Delete from localStorage
⋮----
// If the deleted project's tasks were loaded, clear them
⋮----
// Also delete associated local tasks
⋮----
// Logged-in user: Delete from Supabase (existing logic)
if (!supabase || !user.id) { // Check supabase and user.id here for logged-in path
⋮----
// Also delete associated tasks if desired (or rely on cascade delete if setup in DB)
// For now, let's assume cascade delete on project_id in tasks table handles this.
⋮----
const toggleProjectActive = async (id: string): Promise<boolean> =>
⋮----
if (!user) { // Anonymous user: Toggle active state in localStorage
⋮----
// Toggle logic: if currently active, deactivate it. If inactive, activate it and deactivate others.
⋮----
// Toggle the target project's active state
⋮----
// If we're activating the target project, deactivate all others
// If we're deactivating the target project, leave others as they are
⋮----
// Logged-in user: Toggle in Supabase (existing logic)
⋮----
type RpcFunction = (name: string, params: Record<string, unknown>) => Promise<{ data: unknown, error: unknown }>;
// Using type cast for RPC
⋮----
await loadProjectsAndSessions(); // Refetch to get updated active states
⋮----
const updateProjectStatus = async (
    id: string,
    status: 'active' | 'completed' | 'archived'
): Promise<Project | null> =>
⋮----
if (!user) { // Anonymous user: Update status in localStorage
⋮----
// Logged-in user: Update in Supabase (existing logic)
⋮----
// --- Task Specific Functions ---
const addTaskToContext = async (
    taskData: Omit<UITask, 'id' | 'order' | 'completed' | 'description' | 'priority' | 'due_date' | 'reminder' | 'notes' | 'parent_task_id'> & { // MODIFIED Omit list
      text: string;
      duration: number;
      project_id: string; 
      // user_id is for Supabase path, not stored on local UITask directly
      parent_task_id?: string | null;
      priority?: number;
      due_date?: string | null;
      reminder?: UITask['reminder'];
      description?: string;
      notes?: string;
    }
): Promise<UITask | null> =>
⋮----
taskData: Omit<UITask, 'id' | 'order' | 'completed' | 'description' | 'priority' | 'due_date' | 'reminder' | 'notes' | 'parent_task_id'> & { // MODIFIED Omit list
⋮----
// user_id is for Supabase path, not stored on local UITask directly
⋮----
if (user && user.id && supabase) { // Logged-in user
⋮----
// Additional validation to ensure user_id is properly set
⋮----
user_id: user.id, // Authenticated user's ID - validated above
⋮----
// Only update currentProjectTasks if it's for the task's project
⋮----
} else if (!user) { // Anonymous user
⋮----
const allLocalTasks = getLocalTasks();        // Filter for current project's tasks from allLocalTasks to calculate order correctly
⋮----
const updateTaskInContext = async (
    taskId: string,
    updates: Partial<Omit<UITask, 'id' | 'project_id'>>
): Promise<UITask | null> =>
⋮----
if (user && user.id && supabase) { // Logged-in user
⋮----
// eslint-disable-next-line @typescript-eslint/no-unused-vars
⋮----
} else if (!user && taskId.startsWith('local-task-')) { // Anonymous user
⋮----
const deleteTaskFromContext = async (taskId: string): Promise<boolean> =>
⋮----
if (user && user.id && supabase) { // Logged-in user
⋮----
// Use currentProjectTasks for finding children in the current view for Supabase path
⋮----
} else if (!user && taskId.startsWith('local-task-')) { // Anonymous user
⋮----
const allLocalTasks = getLocalTasks(); // Corrected: let to const
⋮----
// Use allLocalTasks for finding children for local storage path
⋮----
const reorderTasksInContext = async (orderedTasksForProject: UITask[], projectId: string): Promise<void> =>
⋮----
if (user && user.id && supabase) { // Logged-in user
⋮----
// Update local state to reflect new order
⋮----
// Don't set global error for reordering failures - throw error instead for local handling
⋮----
} else if (!user) { // Anonymous user
⋮----
// Don't set global error for reordering failures - throw error instead for local handling
⋮----
getProjectById, // Added this line
```

## File: src/pages/ProjectOverviewPage.tsx
```typescript
import { useState, useEffect, useRef, useCallback, useTransition } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Undo2, CheckCircle2, Archive, Play, Pause, ArrowLeft, PenTool, ExternalLink, Trash2 } from 'lucide-react';
import { BorderContainer } from '@/components/ui/border-container';
import useProjects from '@/hooks/useProjects';
import { Project } from '@/contexts/ProjectContextType';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { TaskList } from '@/components/task-list';
import { TaskListSkeleton } from '@/components/tasks/TaskListSkeleton';
import { ErrorBoundary } from 'react-error-boundary';
import { useAuth } from '@/hooks/useAuth';
import { useFeatureAccess } from '@/hooks/useFeatureAccess';
import { checkWhiteboardExists, saveWhiteboard, deleteWhiteboard } from '@/lib/supabase/whiteboards'; // Added deleteWhiteboard
import { Json } from '@/lib/supabase/database.types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose, // Added DialogClose
} from "@/components/ui/dialog" // Added Dialog components
⋮----
DialogClose, // Added DialogClose
} from "@/components/ui/dialog" // Added Dialog components
⋮----
// Removed aggressive memoization - let React handle change detection naturally
⋮----
// Simple fallback component for ErrorBoundary
function ErrorFallback()
⋮----
export default function ProjectOverviewPage()
⋮----
//projects,
⋮----
error: projectsError, // Added to get error from useProjects hook
⋮----
tasksForProjectId // Added to get tasksForProjectId from useProjects hook
⋮----
// Removed complex memoization refs - simplified approach
⋮----
// Create a debounced version of loadTasksForProject
⋮----
// Modified effect to handle URL params with transition
⋮----
// Use startTransition to defer non-urgent updates
⋮----
// Only update if the values actually changed to prevent unnecessary re-renders
⋮----
// Effect to handle page visibility changes more effectively
⋮----
const handleVisibilityOrFocus = () =>
⋮----
// Block any task loading for a period after focus
⋮----
// Clear any pending task loads
⋮----
// Reset flag after a delay
⋮----
// Clear any pending timeouts
⋮----
// Memoized and stabilized task selection handler
⋮----
// Prevent UI updates during navigation
⋮----
// Defer state updates
⋮----
// Always update the local state
⋮----
// Update URL parameters
⋮----
// If taskId is null, remove both parameters
⋮----
// If we have a task ID, set it
⋮----
// Remove the taskName parameter to prevent search filtering
⋮----
}, { replace: true }); // Use replace: true to avoid adding to browser history
⋮----
// Allow UI updates after a short delay
⋮----
// Effect to load project details
⋮----
if (!isMountedRef.current || isNavigating) return; // Prevent updates if not mounted or during navigation
⋮----
const currentProjectData = getProjectById(id); // Renamed to avoid confusion
⋮----
// Use functional update to compare with the previous state
⋮----
return prevProject; // No change needed
⋮----
// Task loading and other ID-dependent logic will be handled by their respective useEffects
// that depend on 'id' or 'project.id'
⋮----
} else if (!projectsLoading) { // Project not found and projects are not currently loading
// Ensure component is still mounted and not navigating before attempting to navigate
⋮----
previousProjectIdRef.current = id; // Update previous project ID ref
⋮----
// Handle case where id is undefined (e.g., navigating away or invalid URL)
⋮----
// Removed `project` from dependencies to break potential loops.
// `getProjectById` should ideally be stable or return memoized project data.
// `isMountedRef.current` is checked internally, so not needed in deps.
⋮----
// Effect specifically for loading tasks based on the current project ID
⋮----
const currentActiveProjectId = project?.id; // Get current project's ID safely
⋮----
// Guard conditions:
// 1. We must have a valid project ID.
// 2. The component must be mounted.
// 3. We should not be in the middle of a navigation action.
// 4. We should not be in the temporary "pause" state after a page visibility change.
⋮----
// console.debug(`[ProjectOverviewPage] Task Loading useEffect: Skipped. ProjectID: ${currentActiveProjectId}, Mounted: ${isMountedRef.current}, Navigating: ${isNavigating}, VisibilityHandling: ${handlingVisibilityChangeRef.current}`);
⋮----
// Core condition for loading tasks:
// 1. Tasks for the currentActiveProjectId have not yet been loaded (or attempted).
//    (tasksForProjectId from useProjects indicates the ID for which tasks were last fetched)
// 2. We are not already in the process of loading tasks.
⋮----
// console.debug(`[ProjectOverviewPage] Task Loading useEffect: Did not trigger load. CurrentProjectID: ${currentActiveProjectId}, tasksForProjectID: ${tasksForProjectId}, isLoading: ${isLoadingTasksForProject}`);
⋮----
// Dependencies for this effect:
// - project?.id: The primary signal. If this ID changes, we need to re-evaluate loading tasks.
// - tasksForProjectId: To know if tasks for the current project.id are already loaded/attempted.
// - isLoadingTasksForProject: To avoid concurrent loads if a load is already in progress.
// - loadTasksForProject: The function to call (should be stable from useProjects).
// - isNavigating: Guard state.
// isMountedRef and handlingVisibilityChangeRef are refs; their .current property is used directly,
// so they don't need to be in the dependency array.
⋮----
// Effect to check for whiteboard
⋮----
const handleCreateWhiteboard = async () =>
⋮----
const initialSceneData: Json = { // Explicitly type as Json
⋮----
// Optionally open it immediately: handleOpenWhiteboard();
⋮----
const handleOpenWhiteboard = () =>
⋮----
const handleDeleteWhiteboard = async () =>
⋮----
// Remove window.confirm, will be handled by Dialog
// const isConfirmed = window.confirm("Are you sure you want to delete this whiteboard? This action cannot be undone.");
// if (!isConfirmed) {
//   return; // User cancelled the action
// }
⋮----
setShowDeleteConfirm(false); // Close dialog
⋮----
const formatStatus = (status: string) =>
⋮----
const getStatusColor = (status: string) =>
⋮----
const handleToggleProjectActive = async () =>
⋮----
const handleUpdateProjectStatus = async (status: 'active' | 'completed' | 'archived') =>
⋮----
// Get tasks directly without memoization - let React's natural diffing handle optimization
⋮----
{/* Left Column: Project Info Card & New Whiteboard Card */}
⋮----
{/* New Whiteboard Card - Only show if user has whiteboard access */}
⋮----
{/* Right Column: Task List */}
```
