#!/bin/bash

# Stop script on errors
set -e

# Prompt for the feature branch name
read -p "Enter the feature branch name: " feature_branch

if [ -z "$feature_branch" ]; then
  echo "Feature branch name cannot be empty. Exiting."
  exit 1
fi

# Verify if the branch exists locally
if ! git show-ref --verify --quiet "refs/heads/$feature_branch"; then
  echo "Branch '$feature_branch' does not exist locally. Exiting."
  exit 1
fi

# Switch to main and pull the latest changes
echo "Switching to main branch..."
git checkout main

echo "Pulling latest changes from origin/main..."
git pull origin main || { echo "Failed to pull changes from origin/main. Exiting."; exit 1; }

# Merge feature branch into main (changes main!)
echo "Merging feature branch '$feature_branch' into main..."
git merge "$feature_branch" || { echo "Merge conflicts detected. Attempting to resolve."; }

# Handle merge conflicts (if any)
while [ $? -ne 0 ]; do
  echo ""
  echo "⚠️  Merge conflicts detected! Please resolve them manually."
  echo "Once resolved, the script will automatically stage all changes and continue the merge."

  # Automatically stage all changes
  git add .

  echo "Automatically staged all changes."

  # Continue merge after conflict resolution
  git merge --continue
  merge_status=$?
done

echo ""
echo "✅ Merge completed successfully."

# Confirm force-push (because main is now changed)
read -p "Do you want to force-push the merged 'main' to remote? (y/N): " confirm_push
if [[ "$confirm_push" =~ ^[Yy]$ ]]; then
  echo "Force-pushing the merged main branch..."
  git push -f origin main
else
  echo "Skipping push. Remember to push manually if needed."
fi

echo ""
echo "Final git status:"
git status
