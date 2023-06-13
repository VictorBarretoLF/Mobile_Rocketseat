To build your app locally and manage its credentials, you can use the following commands:

-   `eas build --local` // to build the app locally on your machine
-   `eas credentials` // to create or change the credentials of the app

Here are some useful links:

-   [Setting up the development environment](https://reactnative.dev/docs/environment-setup)
-   [Expo CLI workflow](https://docs.expo.dev/workflow/expo-cli/)
-   [Android Debug Bridge](https://developer.android.com/studio/command-line/adb?hl=pt-br#Enabling)
-   [Building APKs for Android Emulators and devices](https://docs.expo.dev/build-reference/apk/)
-   [Generating APK and IPA with React Native CLI](https://www.alura.com.br/artigos/react-native-gerando-apk-ipa)
-   [About Android App Bundles](https://developer.android.com/guide/app-bundle?hl=pt-br)
-   [Signing the app](https://developer.android.com/studio/publish/app-signing?hl=pt-br)
-   [Creating Google Service Account](https://github.com/expo/fyi/blob/main/creating-google-service-account.md)
-   [Submitting to the Google Play Store](https://docs.expo.dev/submit/android/)
-   [Where to put google-services.json file in an expo project?](https://stackoverflow.com/questions/63109112/where-to-put-google-services-json-file-in-an-expo-project)
-   [App credentials](https://docs.expo.dev/app-signing/app-credentials/)

**Build Android APK**

To build an Android APK, use the following command:

```bash
    eas build -p android --profile preview
```

`eas.json`

```bash
    "production": {
    "android" : {
        "autoIncrement" : false,
        "versionCode": 3,
        "versionName": "1.2"
        }
    }
```

### GIT HELPER

### To merge a feature branch into your main branch (commonly `master` or `develop`), you need to ensure you're on the branch you want to merge into. If you want to merge the `feature/salvarLocalizador` branch into `develop`, follow the steps below:

1. **Checkout to the `develop` branch**: Use the following command to switch to the `develop` branch:

    ```bash
    git checkout develop
    ```

2. **Merge the `feature/salvarLocalizador` branch**: Now, you can merge the `feature/salvarLocalizador` branch with the following command:

    ```bash
    git merge feature/salvarLocalizador
    ```

This will bring changes from `feature/salvarLocalizador` into the `develop` branch.

If conflicts occur during the merge, you'll need to resolve these manually. This involves editing the files, selecting the changes you want to keep, and then committing the resolved files.

### To delete a branch on your remote repository, you can use the `git push` command with the `--delete` flag, followed by the name of the branch.

For example, to delete a branch named `my-branch` from your remote repository, follow these steps:

1. **Open your terminal or command prompt**: Depending on your operating system, you can do this by searching for "terminal" or "command prompt" in your applications or search bar.

2. **Run the following command**:

    ```bash
    git push origin --delete my-branch
    ```

    Remember to replace `my-branch` with the actual name of the branch that you want to delete.

This command tells Git to push to the `origin` (which is typically the alias for your remote repository), and the `--delete` flag followed by the branch name (`my-branch`) tells it to delete that branch.

**Note**: You need to have the necessary permissions to delete branches in the remote repository. If you don't have the permissions, you'll receive an error message.

### In Git, there are several ways to undo changes depending on the specific situation:

1. **Unstaged changes**: If you have made changes to your files but haven't staged them yet, you can undo those changes using `git checkout`:

    ```bash
    git checkout -- filename
    ```

    To undo all unstaged changes, simply omit the filename:

    ```bash
    git checkout -- .
    ```

2. **Staged changes**: If you have added changes to the staging area but haven't committed them yet, you can unstage these changes using `git reset`:

    ```bash
    git reset filename
    ```

    To unstage all changes:

    ```bash
    git reset
    ```

3. **Committed changes**: If you have already committed your changes but want to undo the commit, you can use `git reset` again, but with different options:

    - To keep the changes in your working directory but undo the commit:

        ```bash
        git reset --soft HEAD~1
        ```

    - To discard the changes:

        ```bash
        git reset --hard HEAD~1
        ```

    Remember, `git reset --hard` is destructive and permanently discards changes. Use it with caution.

4. **Pushed changes**: If you've pushed your commit to a remote repository, you should create a new commit to revert the changes instead of altering the existing commit:

    ```bash
    git revert commitID
    ```

    After running this command, Git will create a new commit that undoes the changes made in the commit specified by `commitID`.

Remember, always make sure to backup your work before running any commands that can potentially discard changes.
